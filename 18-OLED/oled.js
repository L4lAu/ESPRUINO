const Sereia = {
  width : 64, height : 64, bpp : 1,
  buffer : atob("///////////////v+////////8fx////////AcB///////+D4P/////4/8fx/5////o/k+T8D///94f//+AH///v8D/+AAP//9+fgADgAf//vrP//4YB//992f//DgD//vvq//w+AH/99+v/+HwAP/z1/3/h4AA//n33f4PAMH//fvJ/A4Zw//83cXwDjmD//7Gb+AOOQf//ugLhg84B//+4NcOD3jH//77jDwP4cf//v448A/Hx//+/+HIDw/H//7/h8gOD8P//P8H2EAPw//9/AP5wA/D//n4A/nGD8H/++ADwQ4Pwf/zwAPAPg/A//cOA/B+D8D/7j4D4H4PwH/ofAPAfg/BP8HIBwB+D8G/g4QGIH4Pwd+DnmBgfg/B34P+4eB+D8HPA87D4H4Pwe8DjgPgfg/B7wIMA+B+D8HvAbgD4H4Pwe8D8QPgfg/B5wPDA+B+D8HnA48D4H4Pwe8CHwPgfg/B7wA/A+B+D8HvAD8D4H4Pwe+APwPgfg/Bz4A/A+B+D8HfmD8D4H4Pwd/YPwPgfg/Bv+g/A+B+D8E/4D8D4H4PwH/wPwPgfg/A//g/A+B+D8H//j8D4H4Pw///HwPgfg+P///gA+B+AD////8B4HwP//////xgY////////4AP////////4D/////////w//////////n////8=")
};

I2C1.setup();
let oled = require("SSD1306").connect(I2C1);

oled.clear();
oled.drawImage(Sereia, x=33, y=0)
oled.flip()