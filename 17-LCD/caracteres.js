I2C1.setup();
let lcd = require("HD44780").connectI2C(I2C1);
const POT = 34;


let amongus = [
    0b00110,
    0b01111,
    0b11100,
    0b11111,
    0b11111,
    0b01111,
    0b01001,
    0b00000
];

lcd.createChar(0, amongus);

lcd.setCursor(0,0);
lcd.write(0);