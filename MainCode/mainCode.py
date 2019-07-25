import os
import serial

#NFC Setup
NFC = serial.Serial('/dev/ttyACM0')
flag = 1
#Print Commands
pm=0
nada=0
juanita= 'A0 0C BD 74'
omar = '7C C2 9B C8'
while flag > 0:
	


# NFC
	while NFC.in_waiting:
		DATAFULL = str(NFC.readline())
		DATA = DATAFULL[3:14]		
		#print(DATA)
		nada=1

#cmd='lp -o fit-to-page -o landscape -o page-ranges=2 B.pdf'
#os.system (cmd)
	if nada==1:
		if DATA == 'Lector RFID':	
			print('NFC ready')
		elif DATA == juanita:
			f=open("Ap.txt", "r")
			Data = f.readline()
			file = ' A.pdf'
			print('Hola Juani')
			pm = 1
		elif DATA == omar:
			f=open("Bp.txt", "r")
			Data = f.readline()
			file = ' B.pdf'
			print('Hola Omar')
			pm = 1
		else:
			print('no identificado')
		#f=open("Bp.txt", "r")
		#Data = f.readline()
		if pm==1:
			o=Data[0]
			#print(o)
			up=Data[2]
			n=int(Data[4]+Data[5]+Data[6])
			r1=int(Data[8]+Data[9]+Data[10])
			r2=int(Data[12]+Data[13]+Data[14])
			#print(r2)

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

			cmd= 'lp -o fit-to-page'+oC+upC+rC+file

			for x in range(0, n):
				os.system(cmd)
			nada=0
		else:
			nada=0
	else:
		nada=0
