const RED = 33;
const GREEN = 27;
const BLUE = 32;

let r = 0; 
let g = 0;
let b = 0;

setInterval(function() 
{
    
    analogWrite(RED, r/255);
    analogWrite(GREEN, g/255);
    analogWrite(BLUE, b/255);

}, 100);


