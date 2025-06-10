import prompt from 'prompt-sync';
let ler= prompt();


console.log('Me fale quantos numeros');
let num= Number(ler());


let Numeros= []
let Dobro= []


for(let i=0; i < num; i++){
    let numero= Number(ler());
    Numeros.push(numero);
Dobro.push(numero * 2);
}


console.log('Você digitou os números:');
for (let item1 of Numeros) {
    console.log(item1);
}


console.log('O dobro de cada número é:');
for (let item2 of Dobro) {
    console.log(item2);
}



