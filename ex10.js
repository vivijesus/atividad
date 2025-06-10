import prompt from "prompt-sync";
let ler = prompt();

console.log('Me fale quantos numeros');
let num = Number(ler());

let Numeros = []

let Dobro = []

for(let i = 0; i < num; i++) {
   let numero = Number(ler());
   Numeros.push(numero);
   Dobro.push(numero * 2)
}

console.log('Números e seus respectivos dobrados:');
for (let i = -0; i < num; i ++){
    console.log(`o dobro de ${Numeros[i]} é ${Dobro[1]}`)
}