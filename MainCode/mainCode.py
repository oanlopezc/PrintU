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

# NFC
	while NFC.in_waiting:
		nfc_data = str(NFC.readline())
		nfc_id = nfc_data[3:14] 
		#print(nfc_id)           
		active=1
	if active==1 and nfc_id!='Lector RFID':
		users = open("users.txt", "r")
		for line in users:
			user= users.readline()  
			user_nfc_id=user[0:11]
			if nfc_id == user_nfc_id:
				NFC.write(str.encode('1'))
				#print(cmd)
				user_id= user[12:16]
				user_name= user[17:len(user)-1]
				text ='1'+user_name+'.'
				NFC.write(str.encode(text))   					
				os.system(cmd)
				recog = 1
				time.sleep(4)                              
				break #deja de ver las siguientes lineas				
			else:
				recog=0
		if recog == 1:
			#print('imprimiendo')			
			NFC.write(str.encode('2'))
			time.sleep(10)        
			active = 0
		else:
			#print('No registrado')			
			NFC.write(str.encode('3'))
			active=0
	else:
		active=0

