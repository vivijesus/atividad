import prompt from 'prompt-sync'
let ler= prompt();


console.log('Quantas notas?')
let quantas= Number(ler());


let notas= [];
let conta = 0;


for(let i= 0; i < quantas; i++){
    let nota = Number(ler(`Digite a nota ${i + 1}: `));
    notas.push(nota);
    conta += nota;
}


let media= conta / quantas;
console.log('a media é' + media);

