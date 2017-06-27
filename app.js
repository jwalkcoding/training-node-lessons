/* TCP/IP 
IP=Stand for Internet Protocol; each computer has an IP address. 
Computer Networking system opens a socket
Socket=the line across which information flows. The information is structured in its own protocal
HTTP,FTP,SMTP(email) all protocols
The way the information is sent is called TCP
Transmission Control Protocol=The Information being sent is split into pieces and the pieces are sent to the socket
the individual piece is called a packet.  The act of separating the information into packets is called TCP. 
Your operating system provides TCP/IP

Node provides the ability to access those features of your operating system.
    -creating sockets
    -make network connection send information over TCP/IP
Node treats packets like a stream. 

With the internet sockets are opened and closed
web socket is to keep the sockets open all the time. 



How node gets the packet information
How node gets the packet information
How node gets the packet information
How node gets the packet information
========================

Port: Once the socket is made and a packet is recieved the port tells the computer what program 
to send the packet to. 
The program is set up on the OS to receive packet from a particular port, it is said that the program is 
listening to that port. 

The port number is specified as part of the address all together called the socket address.
commonly port is used. 

HTTP: A set of rules (format) for Data being transferred on the web. 
HyperText Transfer Protocol. It's a format (of various) defining data being transferred via TCP/IP


*/