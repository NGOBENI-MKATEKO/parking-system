#include <LiquidCrystal.h>
const int rs = 7, e = 9, d4 = 10, d5 = 11 , d6 = 12, d7 = 13,rw = 3;
LiquidCrystal lcd(rs , e , d4 , d5 ,d6 , d7);

void setup(){
  //set up the LCD;s number of columns and rows:
  lcd.begin(16,2);
  //Print a message to the LCD.
 
  }

  void loop(){
    //set the cursor to column 0, line 1
    //note: line 1 is the second row, since counting begind with 0:
    lcd.setCursor(2,0);
     lcd.print("hello,World!");
  }
