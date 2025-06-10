import prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let j = Number(ler(`Digite a qtd máx de notas: `))
let qtd = [];


for (let i = 0; i < j; i++){
    let nota = Number(ler(`Digite uma nota: `))
    qtd.push(nota)
}


let menor = Math.min(...qtd)


console.log(`\nNotas digitadas: `)
for (let i of qtd) {
    console.log(i)
}
console.log(`A maior nota é: ${menor}`)
