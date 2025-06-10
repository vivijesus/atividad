import prompt from "prompt-sync";
let ler = prompt();

console.log('Me diga um numero');
let numero = Number(ler());

let numeros = []
for(let i= 0; i < numero; i++){
    let num = ParseInt(Math.random()*100);
    numeros.push(num);
}

console.log('Os numeros são')
for (let item of numeros){
    console.log(item)
}