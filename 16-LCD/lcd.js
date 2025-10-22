I2C1.setup();
let lcd = require("HD44780").connect12C(I2C1);

lcd.setCursor(0, 0);
lcd.print("    senai :D    ");

lcd.setCursor(0,1);
lcd.print(" Armando Arruda ")