import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa do nome');

let nomes = [];

console.log('informe 05 nomes:');
let n1 = ler();
let n2 = ler();
let n3 = ler();
let n4 = ler();
let n5 = ler();

nomes.push(n1);
nomes.push(n2);
nomes.push(n3);
nomes.push(n4);
nomes.push(n5);

console.log('voce digitou os números');
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);
console.log(nomes[4]);

console.log(nomes);