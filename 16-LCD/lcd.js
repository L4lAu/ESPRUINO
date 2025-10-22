I2C1.setup();
let lcd = require("HD44780").connect12C(I2C1);

telas = 0
setInterval(function () {
    switch (telas) {
        case 0:
            lcd.setCursor(0, 0);
            lcd.print("    senai :D    ");
            lcd.setCursor(0, 1);
            lcd.print(" Armando Arruda ");

        case 1:
            lcd.setCursor(0, 0);
            lcd.print("    lalau :D    ");
            lcd.setCursor(0, 1);
            lcd.print("   brabissimo   ")
    }
},2000)