#include <SPI.h>
#include <MFRC522.h>
#include <Arduino_FreeRTOS.h>
#include <LiquidCrystal.h>

#define CS  9  // Chip Select Pin
#define RST  8    //Pin Reset
MFRC522 lectorNFC(CS, RST); 

void TaskBlink( void *pvParameters );
void TaskAnalogRead( void *pvParameters );
int LED = 10;

// Screen
byte rs = 3;
byte enable  = 2;
byte dat4 = 4;
byte dat5 = 5;
byte dat6 = 6;
byte dat7 = 7;


LiquidCrystal lcd(rs, enable, dat4, dat5, dat6, dat7);


char data;
String Name = "G";
byte   ubi = 7;
byte lengh = 0;
char data_aux;
byte size_name = 0;
byte p = 0;

String getName(String Data);
void write_String(String message);
void start_letter(String data_size, byte row);



void setup() {

  lcd.begin(16, 2);
  delay(20);
  Serial.begin(9600);
  
  while (!Serial) {
    ;
  }
  SPI.begin();        
  lectorNFC.PCD_Init(); // Revision del ResetPowerDown pin,si LOW -> Hard Reset, si 1 -> SoftReset
  Serial.println(" Lector RFID Listo");
  pinMode(LED, OUTPUT);
  // Now set up two tasks to run independently.
  xTaskCreate(
    TaskBlink
    ,  (const portCHAR *)"Blink"   // A name just for humans
    ,  128  // This stack size can be checked & adjusted by reading the Stack Highwater
    ,  NULL
    ,  2  // Priority, with 3 (configMAX_PRIORITIES - 1) being the highest, and 0 being the lowest.
    ,  NULL );

  xTaskCreate(
    TaskAnalogRead
    ,  (const portCHAR *) "AnalogRead"
    ,  128  // Stack size
    ,  NULL
    ,  3  // Priority
    ,  NULL );

  // Now the task scheduler, which takes over control of scheduling individual tasks, is automatically started.
}

void loop()
{
  // Empty. Things are done in Tasks.
}

/*--------------------------------------------------*/
/*---------------------- Tasks ---------------------*/
/*--------------------------------------------------*/

void TaskBlink(void *pvParameters)  // This is a task.
{
  (void) pvParameters;

  for (;;) // A Task shall never return or exit.
  {
    
  if(Serial.available()>0){
  //data = Serial.readStringUntil('\n');
 // p = 0;
 // data = "";
  data = Serial.read(); 
  }
  

switch(data){
  case '1':   lcd.clear();
              lcd.setCursor(1,0);   
              lcd.write("Hola"); 
              lcd.setCursor(1,1); 
              if(data != 1){
              data = Serial.read(); 
              }
              while( data != '.'  ){
              if(Serial.available()>0){
              data = Serial.read(); 
              if(data != '.'){
              lcd.write(data); 
              }
              
      }
    }
              vTaskDelay( 2000 / portTICK_PERIOD_MS );
              data = "";
              break;
              
  case '2':   lcd.clear();
              lcd.setCursor(1,0);   
              lcd.write("Imprimiendo...");
              vTaskDelay( 4000 / portTICK_PERIOD_MS ); 
              data = "";
              break;
              
  case '3':   lcd.clear();
              lcd.setCursor(2,0);   
              lcd.write("Usuario NO");
              lcd.setCursor(2,1);
              lcd.write("Registrado");
              vTaskDelay( 2000 / portTICK_PERIOD_MS );
              data = "";
              break;

  case '4':   lcd.clear();
              lcd.setCursor(0,0);   
              lcd.write("No Hay Archivos");
              lcd.setCursor(2,1);   
              lcd.write("por Imprimir");              
              break;

  default:    lcd.clear();
              lcd.setCursor(5,0);
              lcd.write("PrintU");
              vTaskDelay( 500 / portTICK_PERIOD_MS );
              //Serial.println("Default");
}

  
}
}
void TaskAnalogRead(void *pvParameters)  // This is a task.
{
  (void) pvParameters;
  
  for (;;)
  {
    if (lectorNFC.PICC_IsNewCardPresent()) // 1 si Status OK o Collision
        {  
    
            if (lectorNFC.PICC_ReadCardSerial()) // 1 si  Hay tarjeta legible 
            {
                  // Enviamos serialemente su UID
                  //Serial.print("ID:");
                  for (byte i = 0; i < lectorNFC.uid.size; i++) {
                          Serial.print(lectorNFC.uid.uidByte[i] < 0x10 ? " 0" : " "); // Si mfrc522.uid.uidByte[i] < 0x10 -> Imprime " 0", de lo contrario imprime " " -> Formato FF FF FF FF
                          Serial.print(lectorNFC.uid.uidByte[i], HEX);   
                  } 
                  Serial.println();
                 
                  lectorNFC.PICC_HaltA();   //Finaliza
                    
            }      
  } 
    vTaskDelay(1);  // one tick delay (15ms) in between reads for stability
  }
}
