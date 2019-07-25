# NFC  + LCD Screen

Una de las tareas de PrintUnit es la identificación de quien imprime, lo cual lo realiza por medio del carné del estudiante, además de esto PrintUnit cuenta con una pantalla por la cual se comunica con el usuario. Para la lectura del carné del estudiante se hiizo uso de un módulo RFID RC522, en cuanto a la pantalla, se utilizo una pantalla LCD.

Para la administración de estas dos tareas se utilizó FreeRTOS implementado en un Arduino UNO.

El código consite en 2 tareas de RTOS, una encargada de la lectura del módulo NFC y el envió del dato de lectura a la raspberry via serial. La segunda tarea consiste en la lectura del puerto serial con la raspberry con el fin de conocer que desplegar en la pantalla. Hay dos tipos de mensajes, mensajes fijos, para los que se usa un número identificador, y mensajes dinámicos, en este caso el nombre, el cual también es identificado mediante un número, pero seguido por el nombre de la persona que va a imprimir.
