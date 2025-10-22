I2C1.setup();
let lcd = require("HD44780").connectI2C(I2C1);
const POT = 34;

let smile = [
        0b00000,
        0b01010,
        0b01010,
        0b00000,
        0b10001,
        0b01110,
        0b00000,
        0b00000,
    ]
lcd.createChar(0, smile);

setInterval (function() 
{
    let valorPOT = analogRead(POT) * 100;

    lcd.setCursor(0,0)
    lcd.write(0)

}, 100)
