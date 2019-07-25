// Test 3 - Prueba LCD
/////////////////////////////////////////
// System calls                        //
#include <unistd.h>                    //
// Input/output streams and functions  //
#include <iostream>                    //
#include <string>                      //
// Interfaces with GPIO                //
#include "matrix_hal/gpio_control.h"   //
// Communicates with MATRIX device     //
#include "matrix_hal/matrixio_bus.h"   //
/////////////////////////////////////////


// GPIO_Mode 
const uint16_t OutputMode = 1;

//Aux. Variables
uint8_t i =0;

//LCD PinOut
uint16_t rs = 0;
uint16_t enable = 1;
uint16_t dat4   = 4;
uint16_t dat5   = 5;
uint16_t dat6   = 6;
uint16_t dat7   = 7;

using namespace std;

//Function Instance
//void Led_On(matrix_hal::GPIOControl gpio, uint16_t pin_out);
void write_lcd(matrix_hal::GPIOControl gpio, uint8_t letter, uint8_t rs_command);  // rs_command == 0 Instruction
void write4(matrix_hal::GPIOControl gpio, uint8_t value);
void Enable(matrix_hal::GPIOControl gpio);
void Position_letter(matrix_hal::GPIOControl gpio, uint8_t col,uint8_t row);
void write_string(matrix_hal::GPIOControl gpio, string data_string);

//Data
uint8_t data = 54;
string data_string = "";
//uint8_t posicion = 0;
int posicion = 0;
int fila = 1;

int main() {
//////////////////////////////////////////////////////////
// Create MatrixIOBus object for hardware communication //
matrix_hal::MatrixIOBus bus;                            //
// Initialize bus and exit program if error occurs      //
if (!bus.Init()) return false;                          //
// Create GPIOControl object                            //
matrix_hal::GPIOControl gpio;                           //
// Set gpio to use MatrixIOBus bus                      //
gpio.Setup(&bus);                                       //
//////////////////////////////////////////////////////////

// Set pin_out mode to output
gpio.SetMode(rs, OutputMode);
gpio.SetMode(enable, OutputMode);
gpio.SetMode(dat4, OutputMode);
gpio.SetMode(dat5, OutputMode);
gpio.SetMode(dat6, OutputMode);
gpio.SetMode(dat7, OutputMode);

usleep(20000);

///////////////////////////////
//Set Begin Configuration LCD//
///////////////////////////////
  usleep(20);

  write_lcd(gpio, 0b00100000, 0);      //Set 4-bits Data Bus
  write_lcd(gpio, 0b00101000, 0);      //Set two lines 
  write_lcd(gpio, 0b00001100, 0);      //D2 = display On D1 = Cursor On D0 = Curossr Blinking 
  write_lcd(gpio, 0x01, 0);            //Clear Display
  usleep(2000);
  data = 2;
  write_lcd(gpio, data, 0);             //Set cursor on start position
  //write_lcd(0, 0);
  usleep(20);
//  usleep(5000);



// Endless loop
while (true) {

cout << "Escriba un String : " <<std::endl;
//cin >> data;
cin >> data_string;
cout << "Escriba Posicion : " <<std::endl;
cin >>  posicion;
cout << "Escriba Fila : " <<std::endl;
cin >>  fila;

Position_letter(gpio, posicion, fila);
write_string(gpio,data_string);
usleep(2000000);

}

return 0;
}


void write_string(matrix_hal::GPIOControl gpio, string data_string){

uint8_t length = data_string.size();
char data_aux;

     for(uint8_t j = 0; j < length; j++){
        data_aux = data_string.at(j);
        write_lcd(gpio, data_aux, 1);
        usleep(10);
        }

}


void Position_letter(matrix_hal::GPIOControl gpio, uint8_t col, uint8_t row) {

  write_lcd(gpio, 2, 0);                                      //Set cursor on start position
  //std::cout << "Aqui" << std::endl;
  usleep(20);
  //write_lcd('A', 1);
  write_lcd(gpio, 2, 0);                                      //Set cursor on start position
  usleep(20);

  if(row == 1) {
    for(uint8_t cols = 0; cols <= col ; cols++) {
    write_lcd(gpio, 0b00010100, 0);
//std::cout << cols;
usleep(40);
    }
  }else {
    write_lcd(gpio, 0b11000000, 0);
    for(uint8_t cols = 0; cols <= col ; cols++) {
    write_lcd(gpio, 0b00010100, 0);
    }
  }

}

void write_lcd(matrix_hal::GPIOControl gpio, uint8_t letter, uint8_t rs_command){
  if(rs_command){
   gpio.SetGPIOValue(rs,1);
  }else{
   gpio.SetGPIOValue(rs, 0);
  }
  write4(gpio, letter>>4);
  write4(gpio, letter);
}


void write4(matrix_hal::GPIOControl gpio, uint8_t value){

  for(uint8_t i =0; i<4; i++){
    gpio.SetGPIOValue(dat4 + i, ((value>>i) & 0x01) );
//std::cout << "Pin :";
//std::cout << i;
//std::cout << " ";
//std::cout << value;
//std::cout << "/n";
usleep(5);
  }
//std::cout << "/n/n/n";
//std::cout << "Other";
usleep(1);
Enable(gpio);
}

void Enable(matrix_hal::GPIOControl gpio){

  gpio.SetGPIOValue(enable, 0);
  usleep(1);
  gpio.SetGPIOValue(enable, 1);
  usleep(1);                   // enable pulse must be >450ns
  gpio.SetGPIOValue(enable, 0); // commands need > 37us to settle
  usleep(40);
}




