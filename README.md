# nodeSerialComm
A tool for serial communication

## Prerequisites
You must have node.js installed on your machine. Goto nodejs.org and download + install the latest LTS version of node.js for your platform. The tools should work on Windows, Mac and Linux. You will also need git.

## Installation

for installing just clone the repo

    git clone https://github.com/enggb/nodeSerialComm.git  

## Start
the tool have two diffrent operation read serial and write serial data 
### Serial Read

     node index.js -p [path of the serial port] -b [baud rate] -r
     
   ![alt text](https://github.com/enggb/nodeSerialComm/blob/master/image/read.png)
     
     
### Serial Write

     node index.js -p [path of the serial port] -b [baud rate] -w

    ![alt text](https://github.com/enggb/nodeSerialComm/blob/master/image/write.png)
