<!DOCTYPE html>

# Print U

<img align="right" width="100" heigth="100" src="Images/PrintU.png">
<div align= "justify">
En este repositorio se puede encontrar toda la información y os códigos utilizados para el proyecto "Print U" desarrollado para la materia Sistemas Embebidos de la Universidad Nacional de Colombia para el periodo 2019-I.
</div>

## Resumen Ejecutivo

<div align= "justify">
Imprimir, es sin duda, una de las actividades comunes en entidades educativas y estatales. No obstante, el servicio de impresión se ha mantenido inalterado durante años apartándose de mejoras tanto logísticas como tecnológicas. Todo lo anterior lleva al mecanismo actual a requerir tiempos de servicio bastante largos y horarios no ajustados a la necesidad de los usuarios. Es allí donde nace PrintU, una solución eficiente e inteligente para la impresión de documentos enfocada en el usuario y el desarrollo de industria sostenible. 

PrintU es un servicio B2C que le permitirá a los usuarios gestionar impresiones desde su celular: establecer parámetros de la impresión, enviar el archivo a la impresora de su preferencia e incluso hacer el pago de forma virtual. Sin restricciones de horario y de manera rápida y sencilla. PrintU no solo mejora el servicio para los usuarios, también está comprometida con el planeta, haciendo uso responsable y eficiente de los recursos, y buscando incentivar y sensibilizar al usuario de su aporte en el cuidado del medio ambiente desde esta actividad.

Al enfocar la implementación de PrintU en universidades se puede calcular la rentabilidad de este negocio de la siguiente manera: la demanda esperada será generada principalmente por estudiantes y profesores de educación superior. Para el segundo semestre del 2017 en Colombia habían 2.394.434 de estudiantes matriculados en instituciones universitarias, cifra que crece año a año. Se estima que en promedio los estudiantes de educación superior gastan entre $ 3.000 y $ 8.000 pesos semanales en impresiones y copias. En el caso específico de la Universidad Nacional de Colombia, sede Bogotá, que cuenta con 32.087 estudiantes matriculados en el segundo semestre del 2018, el gasto en impresiones equivale a una cifra de 96 millones de pesos semanales. Al cabo de un año esta cifra es de 3.072 millones de pesos.

La inversión inicial es baja respecto a las ganancias esperadas y los gastos en insumos y mantenimiento permiten tener una alta rentabilidad en el negocio. Este proyecto se encuentra en etapa final de diseño y un primer prototipo está en desarrollo. En tres meses se podrá implementar una primer prueba piloto.
</div>

## Descripción Técnica

<div align= "justify">
El servicio PrintU está basado en una red de puntos de impresión  inicialmente a lo largo del campus de la Universidad Nacional capaces de conectarse a internet y ser manejados directamente desde el smartphone del usuario.

Cada uno de estos puntos de impresión estaría compuesto por una impresora y un dispositivo desarrollado por PrintU encargado de establecer la conexión de la impresora y el usuario por medio de internet. Por facilidad, a este dispositivo le llamaremos PrintUnit a lo largo de documento.

En esta primera fase de proyecto se plantea desarrollar un primer prototipo de PrintUnit además de la primera versión de la interfaz del usuario.

El protocolo de impresión se dará de la siguiente forma:

El servicio PrintU está basado en una red de puntos de impresión  inicialmente a lo largo del campus de la Universidad Nacional capaces de conectarse a internet y ser manejadas directamente desde el smartphone del usuario.

Cada uno de estos puntos de impresión estaría compuesto por una impresora y un dispositivo desarrollado por PrintU encargado de establecer la conexión de la impresora y el usuario por medio de internet. Por facilidad a este dispositivo le llamaremos PrintUnit a lo largo de documento.

En esta primera fase de proyecto se plantea desarrollar un primer prototipo de PrintUnit además de la primera versión de la interfaz del usuario.

  1. El protocolo de impresión se dará de la siguiente forma:

  2. El usuario crea una cuenta en la aplicación celular de PrintU, a la cual vincula su carnet estudiantil.
  3. El usuario selecciona el archivo a imprimir desde su celular y establece parámetros de impresión (B/N o color, páginas a imprimir, etc...)
  4. La aplicación envía al servidor en internet el documento con los parámetros ya establecidos.
  5. El usuario se identifica por medio de su carnet en cualquiera de las impresoras dispuestas. En este paso es descontado el costo de la impresión del saldo previamente cargado a la cuenta del usuario desde cualquier plataforma de pagos por internet (pse/nequi/rapipay/.../).
  7. PrintUnit lee el carnet con un lector RFID/NFC y valida la identificación
  8. En una validación exitosa, PrintUnit se encarga de ligar este usuario con impresiones pendientes en el servidor y envía dicho documento a la impresora. Todo esto mientras muestra su estado por medio de un display LED.    
  9. La impresora imprime el documento y el Usuario retira el documento.
  
El primer paso sólo debe llevarse a cabo la primera vez que el usuario se vincula a PrintU. Los pasos 2 al 7 pueden llevarse a cabo en menos de 4 minutos y el octavo dependerá de la cantidad de hojas a imprimir.

A continuación, se muestra a detalle la funcionalidad de los dos elementos a desarrollar en la primera fase, PrintUnit y la aplicación.
</div>

### PrintUnit

PrintUnit es el dispositivo encargado de:

  - Gestionar la comunicación con la impresora
  - Conectarse a Internet
  - Identificar al usuario por medio del Carnet Universitario
  - Descargar el documento a imprimir desde internet junto con sus parámetros de imrpesión
  - Mostrar información de estado del punto de impresión
 
Este modulo esta compuesto por un Arduino UNO y una Raspberry Pi3. 

<img src="Images/caja_negra.png">

El arduino esta encargado de la lectura del NFC y el despliegue de datos en el display, esto, implementado un Sistema Operativo de Tiermpo Real (RTOS) haciendo uso de FreeRTOS. La Raspberry Pi está encargada de adminsitrar todo el dispositvo, además de comunicarse con la impresora. La Raspberry además hace uso de NodeRed para obtener los archivos de la lista de usuarios y la lista de impresiones desde la base de datos.

<img src="Images/Copia de Copia de Diagrama de caja negra.jpg">

A continuación se puede apreciar el primer prototipo de PrintUnit junto con la imrpesara de pruebas:

<img src="Images/PUP.jpg">

### Aplicación

La aplicación es la encargada de:

  - Subir a internet el documento a imprimir
  - Establecer parámetros de impresión
  - Realizar el pago (Modalidad Virtual)
  - Mostrar mensajes de confirmación
  - Desplegar la ubicación de las impresoras
  
Esta aplicación fue desarrollada en IONIC junto con NodeRed. A continuación se muestran algunas de las pantallas de la aplicación.

<img align="left" width="360" heigth="640" src="Images/Inicio.png">
<img align="right" width="360" heigth="640" src="Images/Log.png">

<img align="left" width="360" heigth="640" src="Images/file.png">
<img align="right" width="360" heigth="640" src="Images/Map.png">
