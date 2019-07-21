# raspberry-pi-workshop
Sample codes, demo's &amp; example programs for the Raspberry Pi workshop (Feb 17th 2016) for IEEE SB Sahrdaya.

## Sample code programs
* Blink in C
* Blink in Python
* Blink in node.js

## Demo code - Pi controlled kettle
A very wrong hacked implementation of a node server for the demo. But gets the task done...

Basically, I created a node server accepting GET requests at /,/start & /stop. Server calls different code as response to the different GET requests. An HTML page with buttons to trigger GET request is created at the home page. A mobile phone connected to the same network of Raspberry Pi was used to do the demo, by connecting to the home page. The IP address of the Raspberry Pi needs to be hard-coded to the HTML page (also needed to access the server from the phone) for the GET requests to work.

A relay module connected to the a GPIO pin gets triggered ON/OFF as per the GET requests sent by the mobile phone/browser to the node server. The relay controls the power to the kettle, turning it ON or OFF remotely. Check slides for more info.

## Workshop slides
Slides can be accessed from https://docs.google.com/presentation/d/1Rg12xrUIeAMwx4q0_ZeRPe5b8x9yPrlOUHDpqol7Nhg/edit?usp=sharing
