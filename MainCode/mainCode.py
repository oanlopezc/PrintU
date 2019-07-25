import time
import os
import serial

os.system('sudo chmod a+rw /dev/ttyACM0')

#NFC Setup
NFC = serial.Serial('/dev/ttyACM0')
flag = 1
#Print Commands
recog=0
exist=0
active=0
hola = 1
cmd = 'lp -o fit-to-page ejecutivo.pdf'


while flag > 0:

	# NFC From Arduino-----------------------------
	while NFC.in_waiting:
		nfc_data = str(NFC.readline())
		nfc_id = nfc_data[3:14] 
		#print(nfc_id)           
		active=1
	# Identificación del Usuario, de parámetros de impresión y generación del comando de impresión.
	if active==1 and nfc_id!='Lector RFID':
		users = open("users.txt", "r")
		for line in users:	# Busqueda del usuario en la base de datos
			user= users.readline()  
			user_nfc_id=user[0:11]
			if nfc_id == user_nfc_id:
				NFC.write(str.encode('1'))
				user_id= user[12:16]
				user_name= user[17:len(user)-1]
				text ='1'+user_name+'.'
				NFC.write(str.encode(text))   	# Se saluda al Usuario -> Hola <Usuario>				
				recog = 1
				time.sleep(4)                              
				break # Una vez lo encuentra sale del for				
			else:
				recog=0
		if recog==1:		# Estando resgitrado el usuario
                        queue = open("queue.txt", "r")
                        for line in queue:	# Se busca si tiene impresiones pendientes en la base de datos
                                job= queue.readline()
                                if user_id == job [2:6]:	# En caso de que existan, Se leen los parámetros de impresión
                                        o=int(job[7])
                                        up=int(job[9])
                                        n=int(job[11:14])
                                        r1=int(job[15:18])
                                        r2=int(job[19:22])
                                        filename=(job[23:len(job)])
                                        if o==0:		
                                                oC=' -o portrait'
                                        else:
                                                oC=' -o landscape'

                                        if up==0:
                                                upC=' -o number-up=2'
                                        else:
                                                upC=' -o number-up=1'

                                        if r1==0:
                                                rC=' -o page-ranges='+str(r2)
                                        else:
                                                rC=' -o page-ranges='+str(r1)+'-'+str(r2)

                                        cmd= 'lp -o fit-to-page'+oC+upC+rC+' '+filename # Se crea el comando de impresión

                                        for x in range(0, n): # Se imprime el archivo n veces
                                       
						os.system(cmd) # Se envia el comando de impresión
                                        exist = 1

                                else:
                                        pass    	
					
			if exist == 1:			
				NFC.write(str.encode('2')) # Se indica en la pantalla que se está imprimiendo
				time.sleep(10)        
				active = 0
			else:			
				NFC.write(str.encode('4')) # Se indica en la pantalla que  no hay archivos pendientes
				active=0
		else:
			NFC.write(str.encode('3')) # se indica en la pantalla que el usuario no está registrado
			active=0
	else:
		active=0

