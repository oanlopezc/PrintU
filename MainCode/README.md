# Main Code

Este es el código encargado de:
  - Identificación del Usuario en la base de datos a partir del NFC ID enviado por el arduino.
  - Si el usuario tiene impresiones pendientes, se lee los parámetros de la impresión.
  - Indicarle a la pantalla por medio del ardiuno el mensaje que debe mostrar.
  - Enviar el comando de impresión a la impresora por medio de CUPS.
  
 El código incia a correr una vez identifica datos de NFC en el puerto serial provenientes del arduino, luego desde la base de datos de usuarios se encarga de identificar al usario. Una vez el usuario es identificado, busca en la base de datos de impresiones si existen archivos asociados al usuario. En el caso de haber impresiones pendientes, lee los parámetros de impresión y finalmente envia el comando unico de impresión a la impresora por medio de CUPS
