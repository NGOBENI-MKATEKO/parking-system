#include <Wire.h> 

#include <Servo.h> 

Servo mygate;

int IR1 = 2; // entrance 
int IR2 = 4; // exit

int Slot = 1000;           //Enter Total number of parking Slots

int flag1 = 0;
int flag2 = 0;

void setup() {

pinMode(IR1, INPUT);
pinMode(IR2, INPUT);
  
mygate.attach(3);


}

void loop(){ 
Serial.begin(9600);

if(digitalRead (IR1) == LOW && flag1==0){
  Serial.println("trigger scanner");
if(Slot>0){
  flag1=1;
  if(flag2==0){
    mygate.write(0); 
    Slot = Slot-1;
    }
}
}

if(digitalRead (IR2) == LOW && flag2==0){
  Serial.println("trigger scanner");
  flag2=1;
  if(flag1==0){
    mygate.write(0);
    Slot = Slot+1;
    }
}

if(flag1==1 && flag2==1){
  //Serial.println("flag1 == 1 and flag2 ==1");
  delay (1000);
  mygate.write(100);
  flag1=0, flag2=0;
}

}
