import prompt from "prompt-sync";
let ler = prompt();

console.log('Quantos ingressos');
let ing = Number(ler());

console.log('siglas');
let ingr = ler();

let ingressos = [];

for(let i=1; i<=ing; i++){
    let codigo = ingr +"" + i;
    ingressos.push(codigo);
}

console.log('Ingressos')
for(let i=0; i < ingressos.length; i++){
    console.log(ingressos[i]);
}