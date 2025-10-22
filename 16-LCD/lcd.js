I2C1.setup();
let lcd = require("HD44780").connectI2C(I2C1, 0x27, 20, 4);

let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
let start = 0;
const width = 16;

texto = texto + " ".repeat(width);

function show() {
    lcd.setCursor(0, 0);
    lcd.print(texto.substr(start, width));
    start++;
    if (start > texto.length - width) start = 0;
}

lcd.clear();
show();
setInterval(show, 250);
