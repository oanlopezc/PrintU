#include <SPI.h>
#include <MFRC522.h>
#include <Arduino_FreeRTOS.h>

#define CS  9  // Chip Select Pin
#define RST  8    //Pin Reset
MFRC522 lectorNFC(CS, RST); 

void TaskBlink( void *pvParameters );
void TaskAnalogRead( void *pvParameters );
int LED = 10;

void setup() {
  
  
  Serial.begin(9600);
  
  while (!Serial) {
    ;
  }
  SPI.begin();        
  lectorNFC.PCD_Init(); // Revision del ResetPowerDown pin,si LOW -> Hard Reset, si 1 -> SoftReset
  Serial.println("Lector RFID Listo");
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
    ,  1  // Priority
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

/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, LEONARDO, MEGA, and ZERO 
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN takes care 
  of use the correct LED pin whatever is the board used.
  
  The MICRO does not have a LED_BUILTIN available. For the MICRO board please substitute
  the LED_BUILTIN definition with either LED_BUILTIN_RX or LED_BUILTIN_TX.
  e.g. pinMode(LED_BUILTIN_RX, OUTPUT); etc.
  
  If you want to know what pin the on-board LED is connected to on your Arduino model, check
  the Technical Specs of your board  at https://www.arduino.cc/en/Main/Products
  
  This example code is in the public domain.

  modified 8 May 2014
  by Scott Fitzgerald
  
  modified 2 Sep 2016
  by Arturo Guadalupi
*/

  // initialize digital LED_BUILTIN on pin 13 as an output.
  

  for (;;) // A Task shall never return or exit.
  {
    digitalWrite(LED, HIGH);   // turn the LED on (HIGH is the voltage level)
    vTaskDelay( 250 / portTICK_PERIOD_MS ); // wait for one second
    digitalWrite(LED, LOW);    // turn the LED off by making the voltage LOW
    vTaskDelay( 1000 / portTICK_PERIOD_MS ); // wait for one second
  }
}

void TaskAnalogRead(void *pvParameters)  // This is a task.
{
  (void) pvParameters;
  
/*
  AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Graphical representation is available using serial plotter (Tools > Serial Plotter menu)
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.
*/

  for (;;)
  {
    if (lectorNFC.PICC_IsNewCardPresent()) // 1 si Status OK o Collision
        {  
    
            if (lectorNFC.PICC_ReadCardSerial()) // 1 si  Hay tarjeta legible 
            {
                  // Enviamos serialemente su UID
                  Serial.print("ID:");
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
