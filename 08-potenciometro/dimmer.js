const LED = 27 ;
const POT = vp;

pinMode(LED,  "output");

setInterval(() => {
    let valorPOT = analogRead(POT);
    console.log("INTENSIDADE DA LUZ: ", valorPOT);

    if (valorPOT == 0) {
        analogWrite(LED, 0)
    } 
    else if (valorPOT <= 30) {
        analogWrite(LED, valorPOT)
    } 
    else if (valorPOT <= 50) {
        analogWrite(LED, valorPOT)
    }
    else if (valorPOT <= 70) {
        analogWrite(LED, valorPOT)
    }

}, 100);

