import prompt from "prompt-sync";
let ler = prompt();

console.log('Quantos numeros voce quer digitar?');
let quantos = Number(ler());

let numeros = [];

for (let cont = 0; cont < quantos; cont++) {
    let numero = Number(ler("Posição do número" + cont + ":"));
    numeros.push(numero);
}

console.log("Numeros na ordem invertida");
for (let i = quantos - 1; i >=0; i--){
    console.log(numeros[i]);
}
