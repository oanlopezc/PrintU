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
		if recog==1:
                        queue = open("queue.txt", "r")
                        for line in queue:
                                job= queue.readline()
                                if user_id == job [2:6]: #and job[0] == 0:
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

                                        cmd= 'lp -o fit-to-page'+oC+upC+rC+' '+filename

                                        for x in range(0, n):
                                       
						os.system(cmd)
                                        exist = 1

                                else:
                                        pass    	
					
			if exist == 1:
			#print('imprimiendo')			
				NFC.write(str.encode('2'))
				time.sleep(10)        
				active = 0
			else:			
				NFC.write(str.encode('4'))
				active=0
		else:
			NFC.write(str.encode('3'))
			active=0
	else:
		active=0

