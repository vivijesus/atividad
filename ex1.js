import Prompt from "prompt-sync";
let ler = prompt();



console.log('Programa do vetor');

let numeros = [];

console.log('informe 05 números:');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

numeros.push(n1);
numeros.push(n2);
numeros.push(n3);
numeros.push(n4);
numeros.push(n5);

console.log('voce digitou os números');
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

console.log(numeros);
