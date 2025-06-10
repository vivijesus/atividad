import Prompt from "prompt-sync";
let ler = prompt();

console.log('Quantos numeros para o primeiro vetor?');
let num = Number(ler());

console.log('Quantos numeros para o segundo vetor?')

let num2 = Number(ler());

let vet1 = [];
let vet2 = [];
let vet3 = [];

console.log('Digite os numeros do primeiro vetor:');
for (let i = 0; i < num; i++) {
    let numero = Number(ler());
    vet1.push(numero);
}

console.log('Digite os numeros do segundo vetor:');
for (let i = 0; i < num2; i++) {
    let numero = Number(ler());
    vet2.push(numero);
}

let menor = num < num2 ? num : num2;
for (let i = 0; i < menor; i++) {
    vet3.push(vet1[i] + vet2[i]);
}

console.log('Primeiro vetor:');
for (let n of vet1){
    console.log(n);
}

console.log('Segundo vetor:');
for(let n of vet2){
    console.loh(n);
}

console.log('A soma e terceirp vetor é:');
for(let n of vet3){
    console.log(n);
}