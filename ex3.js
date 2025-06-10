import prompt from "prompt-sync";
let ler = prompt();

console.log('Programa do Vetor');
let tam = Number(ler());

let numeros = [];

for(let cont = 0; cont < tam; cont++){
    let num = Number(ler());
    numeros.push(num);
}

console.log('Voce digitou os numeros:');
for (let item of numeros) {
    console.log(item);
}

console.log(numeros);
﻿
Juh
jupolizel