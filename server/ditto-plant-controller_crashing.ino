//#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"
#include <string>
#include <sstream>
#include <string.h>

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
 
// pin sensors
const int sensor_pin_for_soil_humidity = A0; // este es el 3
const int sensor_pin_for_relay_1 = A3; // este es el 4
const int relayOnePin = 26; //P26
const int relayTwoPin = 25; // P25
const int relayThreePin = 33; //P33
const int relayFourPin = 32;  //P32

void handleRaleyActions() {
    if (isRelayOneOn) { digitalWrite(relayOnePin, LOW);Serial.println("raley one ON"); } else { digitalWrite(relayOnePin, HIGH);Serial.println("raley one OFF"); };
    if (isRelayTwoOn) { digitalWrite(relayTwoPin, LOW);Serial.println("raley two ON"); } else { digitalWrite(relayTwoPin, HIGH);Serial.println("raley two OFF"); };
    if (isRelayThirdOn) { digitalWrite(relayThreePin, LOW);Serial.println("raley three ON"); } else { digitalWrite(relayThreePin, HIGH);Serial.println("raley three OFF"); };
    if (isRelayFourthOn) { digitalWrite(relayFourPin, LOW);Serial.println("raley four ON"); } else { digitalWrite(relayFourPin, HIGH);Serial.println("raley four OFF"); };
}

const char* getCharFromInt(int num)
{
    Serial.print("num: ");
    Serial.println(num);  
    stringstream strs;
    strs << num;
    string temp_str = strs.str();

    char* char_type = (char*) temp_str.c_str();
    Serial.print("char_type: ");
    Serial.println(char_type);  
    return char_type;
}

void updateServerAndRelaysState() {
   
    WiFiClient client;
    HTTPClient http;    
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
Serial.print("Soil Humidity before updateserver: ");
    Serial.println(soilHumidity);   
    
    const char* addSoilHumidity = getCharFromInt(soilHumidity);

    Serial.print("addSoilHumidity: ");
    Serial.println(addSoilHumidity);   
    
    const char* addAirHumidity= getCharFromInt(airHumidity);
    const char* addTempeture= getCharFromInt(tempeture);
    char queryString[950];
    const char *first = "{\"operationName\": \"UpdatePlant\",\"variables\":{\"id\": \"630d325b4872db758bb808b9\", \"controllerId\": 20, \"soilHumidity\": ";
    const char *secon = ", \"airHumidity\": ";
    const char *third = ", \"tempeture\": ";



    const char *fourth = isRelayOneOn ? ", \"isRelayOneOn\": \" true" : ", \"isRelayOneOn\": false";
    const char *fifth = isRelayTwoOn ? ", \"isRelayTwoOn\": true" : ", \"isRelayTwoOn\": false";
    const char *sixth = isRelayThirdOn ? ", \"isRelayThirdOn\": true" : ", \"isRelayThirdOn\": false";
    const char *seventh = isRelayFourthOn ? ", \"isRelayFourthOn\": true" : ", \"isRelayFourthOn\": false";
    const char *last= "},\"query\":\"mutation UpdatePlant($id: ID!, $controllerId: Int!, $soilHumidity: Int, $airHumidity: Int, $tempeture: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, controllerId: $controllerId, soilHumidity: $soilHumidity, airHumidity: $airHumidity, tempeture: $tempeture, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}\"}";
    
    strcpy(queryString,first);
    strcat(queryString,addSoilHumidity);
    strcat(queryString,secon);
    strcat(queryString,addAirHumidity);
    strcat(queryString,third);
    strcat(queryString,addTempeture);
    strcat(queryString,fourth);
//    strcat(queryString,isRelayOneOn);
    strcat(queryString,fifth);
//    strcat(queryString,isRelayTwoOn);
    strcat(queryString,sixth);
//    strcat(queryString,isRelayThirdOn);
    strcat(queryString,seventh);
//    strcat(queryString,isRelayFourthOn);
    strcat(queryString,last);
    
    Serial.println(queryString);

//17:26:40.660 -> {"operationName": "UpdatePlant","variables":{"id": "630d325b4872db758bb808b9", "controllerId": 20, "soilHumidity": 0, "airHumidity": 0, "tempeture": 0, "isRelayOneOn": "false", "isRelayTwoOn": "false", "isRelayThirdOn": "false", "isRelayFourthOn": "false"},"query":"mutation UpdatePlant($id: ID!, $controllerId: Int!, $soilHumidity: Int, $airHumidity: Int, $tempeture: Int, $isRelayOneOn: String, $isRelayTwoOn: String, $isRelayThirdOn: String, $isRelayFourthOn: String) { updatePlant(id: $id, controllerId: $controllerId, soilHumidity: $soilHumidity, airHumidity: $airHumidity, tempeture: $tempeture, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}"}

//  const char* body = "{\"operationName\": \"UpdatePlant\",\"variables\":{\"id\": \"630d325b4872db758bb808b9\", \"controllerId\": 20, \"soilHumidity\": 20, \"airHumidity\": 12, \"tempeture\": 30, \"isRelayOneOn\": \"false\", \"isRelayOneOn\": \"false\"},\"query\":\"mutation UpdatePlant($id: ID!, $controllerId: Int!, $humedad: Int, $tempeture: Int, $mapeoTierra: Int, $mapeoLuz: Int) { updatePlant(id: $id, controllerId: $controllerId, humedad: $humedad, tempeture: $tempeture, mapeoTierra: $mapeoTierra, mapeoLuz: $mapeoLuz ) { status message }}\"}";
    const char* body = queryString;

    int httpResponseCode = http.POST(body);
   
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);   
    String payload = http.getString();
    
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


int readSoilHumidity() {
    int rawHumidity = analogRead(sensor_pin_for_soil_humidity);
    int _moisture = ( 100 - ( (rawHumidity/4095.00) * 100 ) );
    Serial.print("Moisture = ");
    Serial.print(_moisture);  /* Print Temperature on the serial window */
    Serial.println("%");
    return _moisture;
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
    pinMode(relayOnePin, OUTPUT);
    pinMode(relayTwoPin, OUTPUT);
    pinMode(relayThreePin, OUTPUT);
    pinMode(relayFourPin, OUTPUT);
}


void loop() { 
    //Check WiFi connection status, if no conection, we do NOTHING
    if(WiFi.status() != WL_CONNECTED) return;

    soilHumidity = readSoilHumidity();
    Serial.print("soilHumidity11: ");
    Serial.println(soilHumidity);   
    updateServerAndRelaysState();
    handleRaleyActions();

      
    delay(30000);
//    isRelayOneOn = true;
//    handleRaleyActions();
//    delay(10000);
//    isRelayOneOn = false;
//    isRelayTwoOn = true;
//    handleRaleyActions();
//    delay(15000);
//    isRelayTwoOn = false;
//    isRelayThirdOn = true;
//    handleRaleyActions();
//    delay(20000);
//    isRelayThirdOn = false;
//    isRelayFourthOn = true;
//    handleRaleyActions();
}
