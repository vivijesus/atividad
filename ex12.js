import Prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let j = Number(ler(`Digite a qtd max de pliotos: `));
let numero = [];
for(let i = 0; i < j; i++) {
    let n = Number(ler(`Digite a posição de cada um: `));
    numero.push(n);
}


let numero2 = [];
for(let i = 0; i < j; i++) {
    let n = Number(ler(`Digite a posição de chegada de cada um: `));
    numero2.push(n);
}


for (let i = 0; i < j; i++) {
    let diferenca = numero[i] - numero2[i];
    if (diferenca > 0) {
        console.log(`O piloto ${i+1} avançou ${diferenca} posições!`);
    } else if(diferenca < 0) {
        console.log(`O piloto ${i+1} retrocedeu ${Math.abs(diferenca)} posições!`);
    } else {
        console.log(`O piloto ${i+1} manteve a posição! `)
    }
}
