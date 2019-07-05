#include <SPI.h>
#include <MFRC522.h>
#include <Arduino_FreeRTOS.h>

#define CS  9  // Chip Select Pin
#define RST  8    //Pin Reset
MFRC522 lectorNFC(CS, RST); 

void TaskBlink( void *pvParameters );
void TaskNFC( void *pvParameters );
int LED = 10; // El 13 esta ocupado en el NFC

void setup() {
  
  
  Serial.begin(9600);
  
  while (!Serial) {
    ;
  }
  SPI.begin();        
  lectorNFC.PCD_Init(); // Revision del ResetPowerDown pin,si LOW -> Hard Reset, si 1 -> SoftReset
  Serial.println("Lector RFID Listo");
  pinMode(LED, OUTPUT);
  // Configurando las tareas
  xTaskCreate(
    TaskBlink
    ,  (const portCHAR *)"Blink"   //Nombre de la tarea
    ,  128  // Tamaño del Stack
    ,  NULL
    ,  2  // Prioridad -> 3 Maxma prioridad, 0 Menor prioridad
    ,  NULL );

  xTaskCreate(
    TaskAnalogRead
    ,  (const portCHAR *) "NFC"
    ,  128  
    ,  NULL
    ,  1  
    ,  NULL );


}

void loop()
{
 // Todo se hace desde las tareas
}

/*---------------------- Tareas ---------------------*/


void TaskBlink(void *pvParameters)  // Lo que hace a tera
{
  (void) pvParameters;



  for (;;) // No se retorna nada y se hace siempre (por ahora)
  {
    digitalWrite(LED, HIGH);   // turn the LED on 
    vTaskDelay( 250 / portTICK_PERIOD_MS ); // Espera medio segundo
    digitalWrite(LED, LOW);    // turn the LED off 
    vTaskDelay( 1000 / portTICK_PERIOD_MS ); //Espera medio segundo
  }
}

void TaskNFC(void *pvParameters)  
{
  (void) pvParameters;
  

  for (;;)
  {
    if (lectorNFC.PICC_IsNewCardPresent()) // 1 si Status OK o Collision
        {  
    
            if (lectorNFC.PICC_ReadCardSerial()) // 1 si  Hay tarjeta legible 
            {
                  // Enviamos serialemente su UID
                  Serial.print("ID:"); // Esto se quitará
                  for (byte i = 0; i < lectorNFC.uid.size; i++) {
                          Serial.print(lectorNFC.uid.uidByte[i] < 0x10 ? " 0" : " "); // Si mfrc522.uid.uidByte[i] < 0x10 -> Imprime " 0", de lo contrario imprime " " -> Formato FF FF FF FF
                          Serial.print(lectorNFC.uid.uidByte[i], HEX);   
                  } 
                  Serial.println();
                 
                  lectorNFC.PICC_HaltA();   //Finaliza
                    
            }      
  } 
    vTaskDelay(1);  // Esto es un delay de un pulso de reloj, supuestamente para estabilidad :D
  }
}
