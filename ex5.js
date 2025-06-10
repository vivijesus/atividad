import prompt from "prompt-sync";
let ler = prompt();

console.log('Me diga um numero');
let num = Number(ler());

let conta = []
for(let i=0; i <= 10; i++){
    let resultado = num * i;
    conta.push(resultado);
}

console.log('A tabuada é')
for(let item of conta) {
    console.log(item)
}