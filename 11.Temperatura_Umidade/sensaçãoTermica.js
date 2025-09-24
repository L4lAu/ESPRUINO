const DHT11 = 32;

let dht = require("dht11.js").connect(DHT11);

setInterval(()=>{
    let temperatura = dht.readTemperature();
    let umidade = dht.readHumidity();

    console.log("temperatura ", temperatura + "°C");
    console.log("umidade: ", umidade + "%");
},100);
