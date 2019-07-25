<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Text Alignment Example</title>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="jquery.column.js"></script>
		<script type="text/javascript" src="../lib/jquery.text-align.js"></script>
		<script type="text/javascript">
			$(function() {
				var myCells = $('table#example td');
			
				myCells.nthCol(1).textAlign(',');
				myCells.nthCol(2).textAlign(',');
				myCells.nthCol(3).textAlign(',');
			});
		</script>
		<style>
			body {
				font-family: Verdana, Arial, Sans-Serif;
				font-size: 0.95em;
			}
			h1, h2 {
				font-weight: normal;
				font-family: Georgia, Times, Serif;
			}
			table {
				padding: 0.75em;
				display: inline-block;
				border: 1px solid rgb(180,180,180);
				border-collapse: collapse;
			}
			th, td {
				padding: 0.1em 1.5em;
				vertical-align: top;
				text-align: left;
				font-weight: normal;
			}
			thead th {
				font-weight: bold;
			}
			thead {
				border-bottom: 1px solid rgb(180,180,180);
			}
			tfoot {
				border-top: 1px solid rgb(180,180,180);
			}
			table tr.highlight {
				border: 2px solid rgb(100,100,100);
			}
			table col.highlight {
				border: 2px solid rgb(100,100,100);
			}
			table td.highlight, table th.highlight {
				border-right: 2px solid rgb(100,100,100);
				border-left: 2px solid rgb(100,100,100);
			}
			table thead th.highlight {
				border-top: 2px solid rgb(100,100,100);
			}
			table tfoot td.highlight {
				border-bottom: 2px solid rgb(100,100,100);
			}
			pre {
				background-color: rgb(240, 240, 240);
				display: inline-block;
				padding: 2em;
			}
		</style>
	</head>

# Print U

<img align="right" width="100" heigth="100" src="PrintU.png">
<p text-align="justify">
Imprimir, es sin duda, una de las actividades comunes en entidades educativas y estatales. No obstante, el servicio de impresión se ha mantenido inalterado durante años apartándose de mejoras tanto logísticas como tecnológicas. Todo lo anterior lleva al mecanismo actual a requerir tiempos de servicio bastante largos y horarios no ajustados a la necesidad de los usuarios. Es allí donde nace PrintU, una solución eficiente e inteligente para la impresión de documentos enfocada en el usuario y el desarrollo de industria sostenible. 

PrintU es un servicio B2C que le permitirá a los usuarios gestionar impresiones desde su celular: establecer parámetros de la impresión, enviar el archivo a la impresora de su preferencia e incluso hacer el pago de forma virtual. Sin restricciones de horario y de manera rápida y sencilla. PrintU no solo mejora el servicio para los usuarios, también está comprometida con el planeta, haciendo uso responsable y eficiente de los recursos, y buscando incentivar y sensibilizar al usuario de su aporte en el cuidado del medio ambiente desde esta actividad.

Al enfocar la implementación de PrintU en universidades se puede calcular la rentabilidad de este negocio de la siguiente manera: la demanda esperada será generada principalmente por estudiantes y profesores de educación superior. Para el segundo semestre del 2017 en Colombia habían 2.394.434 de estudiantes matriculados en instituciones universitarias, cifra que crece año a año. Se estima que en promedio los estudiantes de educación superior gastan entre $ 3.000 y $ 8.000 pesos semanales en impresiones y copias. En el caso específico de la Universidad Nacional de Colombia, sede Bogotá, que cuenta con 32.087 estudiantes matriculados en el segundo semestre del 2018, el gasto en impresiones equivale a una cifra de 96 millones de pesos semanales. Al cabo de un año esta cifra es de 3.072 millones de pesos.

La inversión inicial es baja respecto a las ganancias esperadas y los gastos en insumos y mantenimiento permiten tener una alta rentabilidad en el negocio. Este proyecto se encuentra en etapa final de diseño y un primer prototipo está en desarrollo. En tres meses se podrá implementar una primer prueba piloto.
</p>
