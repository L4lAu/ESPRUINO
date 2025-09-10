const SERVO = 13;

let ang = 0;


function estabaleceAngulo() {
    let p = (ang / 18 + 2.5) / 100;

    if (p < 0) ang = 0;
    else if (ang > 100) ang = 100;
    return p;
}

setInterval(() => {
    analogWrite(SERVO, estabaleceAngulo(), { freq: 50 });
}, 50);