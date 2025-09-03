const POT = 33;
const LEDAZUL = 26;

pinMode(LEDAZUL, "output");


setInterval(() => {
    let valorPOT = analogRead(POT) * 100;

    console.log("nivel DA BATERIA: " + valorPOT.toFixed(2));

    if (valorPOT <= 30) {
        digitalWrite(LEDAZUL, 0);
      
    }else {
        digitalWrite(LEDAZUL, 1); 
       
    }

}, 100);