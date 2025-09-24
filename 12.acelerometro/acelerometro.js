I2C1.setup();
let mpu = require("MPU6050").connecct(I2C1);



const SDA = 21;
const SCL = 22;

setInterval(() => {
    let acc= mpumpu.getGravity();
    let rot =mpu.getDegreesPerSecond();

    console.log("aceleração: ", "\n x:", acc[0]," y: ", acc[1], "z: ", acc[2]);

    console.log("rotação: ", "\n Roll x:", rot[0]," Pitch y: ", rot[1], " Yaw z: ", rot[2]);
}, 500)