#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>
#include <String.h>
#include <stdlib.h>

byte mac[]    = {  0xDE, 0xED, 0xBA, 0xFE, 0xFE, 0xED };
//IPAddress ip(172, 16, 0, 100);
IPAddress server(192, 168, 0, 98);

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

EthernetClient ethClient;
PubSubClient client(ethClient);

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) 
  {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    
    if (client.connect("arduinoClient")) 
    {
      Serial.println("connected");
      
      // Once connected, publish an announcement...
      char buffer[7];         //the ASCII of the integer will be stored in this char array
      itoa(analogRead(4),buffer,10); //(integer, yourBuffer, base)
      
      client.publish("presence", buffer);
    } 
    
    else 
    {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }

  while(1)
  {
      char buffer[7];         //the ASCII of the integer will be stored in this char array
      itoa(analogRead(A1),buffer,10); //(integer, yourBuffer, base)
      
      client.publish("presence", buffer);
      delay(2000);
  }
}

void setup()
{
  Serial.begin(57600);
  pinMode(4, INPUT);
  client.setServer(server, 5000);
  client.setCallback(callback);

  Ethernet.begin(mac);
  // Allow the hardware to sort itself out
  delay(1500);
}

void loop()
{
  if (!client.connected()) 
  {
    reconnect();
  }
  client.loop();
}                                   
