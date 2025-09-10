const RED = 33;
const GREEN = 27;
const BLUE = 32;

let r = 0;
let g = 0;
let b = 0;

const cores = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
    [1, 1, 1],
]

setInterval(function () {
    for (let i = 0; i < cores.length; i++) {
        const cor = cores[i]

        r = cor[i][0]
        g = cor[i][1]
        b = cor[i][2]

        digitalWrite(RED, r);
        digitalWrite(GREEN, g);
        digitalWrite(BLUE, b);
    };

}, 100);


