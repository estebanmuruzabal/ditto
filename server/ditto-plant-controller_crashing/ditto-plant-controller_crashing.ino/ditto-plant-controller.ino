#include <WiFiManager.h> // https://github.com/tzapu/WiFiManager
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
const char* ssid = "iPhone de Esteban";
const char* password = "Delta123";
// const char* ssid = "PARAM99";
// const char* password = "Athithi1403";
const char* userId = "64558a8356b560e1c8172407";
const char* serverName = "http://3.134.177.166/api";
// const char* serverName = "http://0.0.0.0/api";
const int dry1 = 2960;
const int wet1 = 1105;
const int dry2 = 2896;
const int wet2 = 1110;
const int dark = 4095;
const int bright = 280;

// we set one as default
int minHumiditySetted = 40;

// variables of the plant
int tempeture = 0;
int soilHumidity1 = 0;
int soilHumidity2 = 0;
int airHumidity = 0;
int light = 0;
bool isRelayOneOn = false; 
bool isRelayTwoOn = false;
bool isRelayThirdOn = false;
bool isRelayFourthOn = false;
float duration_us, distance_cm;
 
// pin sensors
#define sensor_pin_for_soil_humidity1 36
#define sensor_pin_for_soil_humidity2 39
#define light_sensor_ping 34

const int relayOnePin = 26; //P26
const int relayTwoPin = 25; // P25
const int relayThreePin = 33; //P33
const int relayFourPin = 32;  //P32

const int motionSensorPin = 35; //P35

const int distanceSensorOneTriggerPin = 27;  
const int distanceSensorOneEchoPin  = 14;  

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

void updateRelaysStateWithLastConfig() {
  // if (oldConfig)
    isRelayOneOn = soilHumidity1 > minHumiditySetted ? false : true;
    isRelayTwoOn = soilHumidity2 > minHumiditySetted ? false : true;
    // isRelayThirdOn = soilHumidity1 > minHumiditySetted ? false : true;
    // isRelayFourthOn = soilHumidity1 > minHumiditySetted ? false : true;

    Serial.print("raleys state after OFFLINE local update:");
    Serial.print("isRelayOneOn:");Serial.println(isRelayOneOn);
    Serial.print("isRelayTwoOn:");Serial.println(isRelayTwoOn);
    Serial.print("isRelayThirdOn:");Serial.println(isRelayThirdOn);
    Serial.print("isRelayFourthOn:");Serial.println(isRelayFourthOn);
}

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
    stringstream strs5;
    stringstream strs6;
    strs1 << soilHumidity1;
    strs2 << airHumidity;
    strs3 << tempeture;
    strs4 << distance;
    strs5 << soilHumidity2;
    strs6 << light;
    string temp_str1 = strs1.str();
    string temp_str2 = strs2.str();
    string temp_str3 = strs3.str();
    string temp_str4 = strs4.str();
    string temp_str5 = strs5.str();
    string temp_str6 = strs6.str();
    
    const char* addSoilHumidity1 = (char*) temp_str1.c_str();
    const char* addAirHumidity = (char*) temp_str2.c_str();
    const char* addTempeture = (char*) temp_str3.c_str();
    const char* addDistance = (char*) temp_str4.c_str();
    const char* addSoilHumidity2 = (char*) temp_str5.c_str();
    const char* addLight = (char*) temp_str6.c_str();
    // end converting

    // now we put everything together
    char queryString[950];
    const char *first = "{\"operationName\": \"UpdatePlant\",\"variables\":{\"id\": \"64558a8356b560e1c8172407\", \"contrId\": 30, \"hum1\": ";
    const char *secon = ", \"airHum\": ";
    const char *third = ", \"temp\": ";
    const char *fourth = ", \"dist\": ";
    const char *fifth = ", \"hum2\": ";
    const char *sixth = ", \"light\": ";
    const char *seventh = isRelayOneOn ? ", \"isRelayOneOn\": true" : ", \"isRelayOneOn\": false";
    const char *eighth = isRelayTwoOn ? ", \"isRelayTwoOn\": true" : ", \"isRelayTwoOn\": false";
    const char *nineth = isRelayThirdOn ? ", \"isRelayThirdOn\": true" : ", \"isRelayThirdOn\": false";
    const char *tenth = isRelayFourthOn ? ", \"isRelayFourthOn\": true" : ", \"isRelayFourthOn\": false";
    const char *last= "},\"query\":\"mutation UpdatePlant($id: ID!, $contrId: Int!, $hum1: Int, $airHum: Int, $temp: Int, $dist: Int, $hum2: Int, $light: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, contrId: $contrId, hum1: $hum1, airHum: $airHum, temp: $temp, dist: $dist, hum2: $hum2, light: $light, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}\"}";
    
    strcpy(queryString,first);
    strcat(queryString,addSoilHumidity1);
    strcat(queryString,secon);
    strcat(queryString,addAirHumidity);
    strcat(queryString,third);
    strcat(queryString,addTempeture);
    strcat(queryString,fourth);
    strcat(queryString,addDistance);
    strcat(queryString,fifth);
    strcat(queryString,addSoilHumidity2);
    strcat(queryString,sixth);
    strcat(queryString,addLight);
    strcat(queryString,seventh);
    strcat(queryString,eighth);
    strcat(queryString,nineth);
    strcat(queryString,tenth);
    strcat(queryString,last);
    
    Serial.println(queryString);

    // this is how the body looks like
    // {"operationName": "UpdatePlant","variables":{"id": "64558a8356b560e1c8172407", "controllerId": 20, "soilHumidity": 42, "airHumidity": 0, "tempeture": 0, "isRelayOneOn": false, "isRelayTwoOn": false, "isRelayThirdOn": false, "isRelayFourthOn": false},"query":"mutation UpdatePlant($id: ID!, $controllerId: Int!, $soilHumidity: Int, $airHumidity: Int, $tempeture: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, controllerId: $controllerId, soilHumidity: $soilHumidity, airHumidity: $airHumidity, tempeture: $tempeture, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}"}
    const char* body = queryString;

    int httpResponseCode = http.POST(body);
   
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);   
    String payload = http.getString();

    // this is how the payload looks like:
    //{"data":{"updatePlant":{"isRelayOneOn":"OF","isRelayTwoOn":"OF","isRelayThirdOn":"OF","isRelayFourthOn":"ON"}}}
    
    Serial.print("payload");
    Serial.println(payload);
  Serial.print("payload2");
    // if (payload.substring(40, 42) == "ON") { 
    //   isRelayOneOn = true;
    //   minHumiditySetted = soilHumidity1;
    // } else { 
    //   isRelayOneOn = false;
    //   maxHumiditySetted = soilHumidity1;
    // };
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


void readSoilHumidity1() {
    int rawHumidity = analogRead(sensor_pin_for_soil_humidity1);
    soilHumidity1 = map(rawHumidity, wet1, dry1, 100, 0);
    Serial.print("SoilHumidity 1 = ");
    Serial.print(soilHumidity1);  /* Print Temperature on the serial window */
    Serial.println("%");

    Serial.print("rawHumidity 1 = ");
    Serial.print(rawHumidity);  /* Print Temperature on the serial window */
}

void readSoilHumidity2() {
    int rawHumidity2 = analogRead(sensor_pin_for_soil_humidity2);
    soilHumidity2 = map(rawHumidity2, wet2, dry2, 100, 0);
    Serial.print("SoilHumidity 2 = ");
    Serial.print(soilHumidity2);  /* Print Temperature on the serial window */
    Serial.println("%");

    Serial.print("rawHumidity 2 = ");
    Serial.print(rawHumidity2);  /* Print Temperature on the serial window */
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
    // WiFiManager wm;

    // bool res;
    // // res = wm.autoConnect(); // auto generated AP name from chipid
    // // res = wm.autoConnect("AutoConnectAP"); // anonymous ap
    // res = wm.autoConnect(ssid, password); // password protected ap

    // if(!res) { Serial.println("Failed to connect"); // ESP.restart(); } 
    // else { Serial.println("connected...yeey :)"); }

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

void readLight() {
   int rawLightValue = analogRead(light_sensor_ping);
   light = map(rawLightValue, bright, dark, 100, 0);
    Serial.print("Light reading = ");
    Serial.print(light);
    Serial.print("rawLightValue reading = ");
    Serial.print(rawLightValue);
}

void loop() { 

    readSoilHumidity1();
    readSoilHumidity2();
    readLight();
    readDistanceSensorOne();
//    readTempeture();
//    readAirHumidity();

    // Check WiFi connection status, if no conection, we do NOTHING
    if(WiFi.status() != WL_CONNECTED) {
      updateRelaysStateWithLastConfig();
    } else {
      updateServerAndRelaysState();
    }
    handleRaleyActions();

    // we update every 5 secs just for now
    delay(5000);

}
