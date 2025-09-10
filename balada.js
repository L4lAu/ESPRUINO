const RED = 33;
const GREEN = 27;
const BLUE = 32;

const cores = [
    [1, 0, 0], // vermelho
    [0, 1, 0], // verde
    [0, 0, 1], // azul
    [1, 0, 1], // roxo
    [1, 1, 0], // amarelo
    [0, 1, 1], // ciano
    [1, 1, 1], // branco
];

let i = 0;

setInterval(function () {
    const cor = cores[i];

    const r = cor[0];
    const g = cor[1];
    const b = cor[2];

    digitalWrite(RED, r);
    digitalWrite(GREEN, g);
    digitalWrite(BLUE, b);

    i = (i + 1) % cores.length;
}, 100);
