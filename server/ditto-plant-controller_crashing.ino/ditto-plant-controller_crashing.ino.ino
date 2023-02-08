//#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"
#include <string>
#include <sstream>
#include <string.h>


// Sound speed in air
#define SOUND_SPEED 340
#define TRIG_PULSE_DURATION_US 10
long ultrason_duration;

using namespace std;
const char* ssid = "ditto";
const char* password = "guemes765";
const char* userId = "630d325b4872db758bb808b9";
const char* serverName = "http://54.232.137.175/api";
//const char* serverName = "http://localhost:7000/api";

// variables of the plant
int tempeture = 0;
int soilHumidity = 0;
int airHumidity = 0;
bool isRelayOneOn = false; // 
bool isRelayTwoOn = false;
bool isRelayThirdOn = false;
bool isRelayFourthOn = false;
float duration_us, distance_cm;
 
// pin sensors
const int sensor_pin_for_soil_humidity = A0; // este es el 3
const int sensor_pin_for_relay_1 = A3; // este es el 4
const int relayOnePin = 26; //P26
const int relayTwoPin = 25; // P25
const int relayThreePin = 33; //P33
const int relayFourPin = 32;  //P32
const int distanceSensorOneTriggerPin = 27;  //P32
const int distanceSensorOneEchoPin  = 14;  //P32
//const int distanceSensorTwoTriggerPin = 35;  //P32
//const int distanceSensorTwoEchoPin  = 34;  //P32

void handleRaleyActions() {
    if (isRelayOneOn) { digitalWrite(relayOnePin, LOW);Serial.println("raley one ON"); } else { digitalWrite(relayOnePin, HIGH);Serial.println("raley one OFF"); };
    if (isRelayTwoOn) { digitalWrite(relayTwoPin, LOW);Serial.println("raley two ON"); } else { digitalWrite(relayTwoPin, HIGH);Serial.println("raley two OFF"); };
    if (isRelayThirdOn) { digitalWrite(relayThreePin, LOW);Serial.println("raley three ON"); } else { digitalWrite(relayThreePin, HIGH);Serial.println("raley three OFF"); };
    if (isRelayFourthOn) { digitalWrite(relayFourPin, LOW);Serial.println("raley four ON"); } else { digitalWrite(relayFourPin, HIGH);Serial.println("raley four OFF"); };
}

//const char* getCharFromInt(int num)
//{
//    Serial.print("num: ");
//    Serial.println(num);  
//    stringstream strs;
//    strs << num;
//    string temp_str = strs.str();
//
//    const char* char_type = (char*) temp_str.c_str();
//    Serial.print("char_type: ");
//    Serial.println(char_type);  
//    return char_type;
//}

void updateServerAndRelaysState() {
    WiFiClient client;
    HTTPClient http;    
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");

    // we convert here three variables from int to const char
    int distance = (int)distance_cm;
    stringstream strs1;
    stringstream strs2;
    stringstream strs3;
    stringstream strs4;
    strs1 << soilHumidity;
    strs2 << airHumidity;
    strs3 << tempeture;
    strs4 << distance;
    string temp_str1 = strs1.str();
    string temp_str2 = strs2.str();
    string temp_str3 = strs3.str();
    string temp_str4 = strs4.str();
    
    const char* addSoilHumidity = (char*) temp_str1.c_str();
    const char* addAirHumidity = (char*) temp_str2.c_str();
    const char* addTempeture = (char*) temp_str3.c_str();
    const char* addDistance = (char*) temp_str4.c_str();
    // end converting

    // now we put everything together
    char queryString[950];
    const char *first = "{\"operationName\": \"UpdatePlant\",\"variables\":{\"id\": \"630d325b4872db758bb808b9\", \"controllerId\": 20, \"soilHumidity\": ";
    const char *secon = ", \"airHumidity\": ";
    const char *third = ", \"tempeture\": ";
    const char *thirdAndAHalf = ", \"distance_cm\": ";
    const char *fourth = isRelayOneOn ? ", \"isRelayOneOn\": true" : ", \"isRelayOneOn\": false";
    const char *fifth = isRelayTwoOn ? ", \"isRelayTwoOn\": true" : ", \"isRelayTwoOn\": false";
    const char *sixth = isRelayThirdOn ? ", \"isRelayThirdOn\": true" : ", \"isRelayThirdOn\": false";
    const char *seventh = isRelayFourthOn ? ", \"isRelayFourthOn\": true" : ", \"isRelayFourthOn\": false";
    const char *last= "},\"query\":\"mutation UpdatePlant($id: ID!, $controllerId: Int!, $soilHumidity: Int, $airHumidity: Int, $tempeture: Int, $distance_cm: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, controllerId: $controllerId, soilHumidity: $soilHumidity, airHumidity: $airHumidity, tempeture: $tempeture, distance_cm: $distance_cm, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}\"}";
    
    strcpy(queryString,first);
    strcat(queryString,addSoilHumidity);
    strcat(queryString,secon);
    strcat(queryString,addAirHumidity);
    strcat(queryString,third);
    strcat(queryString,addTempeture);
    strcat(queryString,thirdAndAHalf);
    strcat(queryString,addDistance);
    strcat(queryString,fourth);
    strcat(queryString,fifth);
    strcat(queryString,sixth);
    strcat(queryString,seventh);
    strcat(queryString,last);
    
    Serial.println(queryString);

    // this is how the body looks like
    // {"operationName": "UpdatePlant","variables":{"id": "630d325b4872db758bb808b9", "controllerId": 20, "soilHumidity": 42, "airHumidity": 0, "tempeture": 0, "isRelayOneOn": false, "isRelayTwoOn": false, "isRelayThirdOn": false, "isRelayFourthOn": false},"query":"mutation UpdatePlant($id: ID!, $controllerId: Int!, $soilHumidity: Int, $airHumidity: Int, $tempeture: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, controllerId: $controllerId, soilHumidity: $soilHumidity, airHumidity: $airHumidity, tempeture: $tempeture, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}"}
    const char* body = queryString;

    int httpResponseCode = http.POST(body);
   
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);   
    String payload = http.getString();

    // this is how the payload looks like:
    //{"data":{"updatePlant":{"isRelayOneOn":"OF","isRelayTwoOn":"OF","isRelayThirdOn":"OF","isRelayFourthOn":"ON"}}}
    
    Serial.print("payload");
    Serial.println(payload);


    if (payload.substring(40, 42) == "ON") { isRelayOneOn = true;} else { isRelayOneOn = false; };
    if (payload.substring(60, 62) == "ON") { isRelayTwoOn = true;} else { isRelayTwoOn = false; };
    if (payload.substring(82, 84) == "ON") { isRelayThirdOn = true; } else { isRelayThirdOn = false; };
    if (payload.substring(105, 107) == "ON") { isRelayFourthOn = true;} else { isRelayFourthOn = false; };

    Serial.print("raleys state after server update:");
    Serial.print("isRelayOneOn:");Serial.println(isRelayOneOn);
    Serial.print("isRelayTwoOn:");Serial.println(isRelayTwoOn);
    Serial.print("isRelayThirdOn:");Serial.println(isRelayThirdOn);
    Serial.print("isRelayFourthOn:");Serial.println(isRelayFourthOn);

    // Free resources
    http.end();
}


void readSoilHumidity() {
    int rawHumidity = analogRead(sensor_pin_for_soil_humidity);
    soilHumidity = ( 100 - ( (rawHumidity/4095.00) * 100 ) );
    Serial.print("SoilHumidity = ");
    Serial.print(soilHumidity);  /* Print Temperature on the serial window */
    Serial.println("%");
}

void readDistanceSensorOne() {
  
digitalWrite(distanceSensorOneTriggerPin, LOW);
  delayMicroseconds(2);
 // Create a 10 µs impulse
  digitalWrite(distanceSensorOneTriggerPin, HIGH);
  delayMicroseconds(TRIG_PULSE_DURATION_US);
  digitalWrite(distanceSensorOneTriggerPin, LOW);

  // Return the wave propagation time (in µs)
  ultrason_duration = pulseIn(distanceSensorOneEchoPin, HIGH);

//distance calculation
  distance_cm = ultrason_duration * SOUND_SPEED/2 * 0.0001;

  // We print the distance on the serial port
  Serial.print("Distance (cm): ");
  Serial.println(distance_cm);

  delay(1000);

  
//     // generate 10-microsecond pulse to TRIG pin
//
//    digitalWrite(distanceSensorOneTriggerPin, HIGH);
//    delayMicroseconds(10);
//    digitalWrite(distanceSensorOneTriggerPin, LOW);
//  
//    // measure duration of pulse from ECHO pin
//    duration_us = pulseIn(distanceSensorOneEchoPin, HIGH);
//  
//    // calculate the distance
//    distance_cm = 0.017 * duration_us;
//  
//    // print the value to Serial Monitor
//    Serial.print("distance: ");
//    Serial.print(distance_cm);
//    Serial.println(" cm");
}

void readTempeture() {
  // define this method
}

void readAirHumidity() {
    // define this method
}

void wifiSetupStuff() {
    WiFi.mode(WIFI_STA); //Optional
    WiFi.begin(ssid, password);
    Serial.println("\nConnecting");
    while(WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(100);
    }
    Serial.println("\nConnected to the WiFi network");
    Serial.print("Local ESP32 IP: ");
    Serial.println(WiFi.localIP());
}

void setup() {
    Serial.begin(115200);
    wifiSetupStuff();
    // relays pins
    pinMode(relayOnePin, OUTPUT);
    pinMode(relayTwoPin, OUTPUT);
    pinMode(relayThreePin, OUTPUT);
    pinMode(relayFourPin, OUTPUT);

    // configure the trigger and echo pins to output and input mode
    pinMode(distanceSensorOneTriggerPin, OUTPUT);
    pinMode(distanceSensorOneEchoPin, INPUT);
}


void loop() { 
    //Check WiFi connection status, if no conection, we do NOTHING
    if(WiFi.status() != WL_CONNECTED) return;

    readSoilHumidity();
    readTempeture();
    readAirHumidity();
    readDistanceSensorOne();

    updateServerAndRelaysState();

    handleRaleyActions();

    // we update every 30 secs just for now
    delay(5000);
}
