import prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let j = Number(ler(`Digite a qtd máx de alunos: `))
let qtd = [];


for (let i = 0; i < j; i++){
    let nota = Number(ler(`Digite uma nota para cada um: `))
    qtd.push(nota)
}


let soma = 0;
for(let i of qtd) {
    soma += i;
}


let media = soma / qtd.length;
let mediafinal = '';


if(media < 6) {
    mediafinal = 'Nem todos os alunos passaram! '
} else if(media > 6) {
    mediafinal = 'Todos os alunos passaram! '
}


console.log(`Notas digitadas: `)
for (let i of qtd) {
    console.log(i)
}
console.log(`A média foi: ${media}. \n${mediafinal}`)

