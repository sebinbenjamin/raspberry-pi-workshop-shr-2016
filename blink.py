import RPi.GPIO as GPIO # Import GPIO library
import time 
GPIO.setmode(GPIO.BOARD) # Use board pin numbering
GPIO.setup(7, GPIO.OUT) # Setup GPIO Pin 7 to OUT
while(true)
	GPIO.output(7,True)
	time.sleep(2000)
	GPIO.output(7,False)
	time.sleep(2000)
GPIO.cleanup()



