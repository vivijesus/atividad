import prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let j = ler(`Digite a qtd máx de nome: `)
let qtd = [];
let aga = [];


for (let i = 0; i < j; i++) {
    let nome = ler(`Digite o nome: `)
    qtd.push(nome)
    if(nome[0].toLowerCase() == 'l'){
        aga.push(nome)
    }
}


console.log(`Nomes digitados: `)
for(let i of qtd) {
    console.log(i)
}


console.log(`Nomes com a letra L: `)
for(let i of aga) {
    console.log(i)
}
