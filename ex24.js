import prompt from "prompt-sync";
let ler = prompt();


console.log(`\n--PROGRAMA DOS VETORES--\n`)


let doacoes = [];
let nomeproj = ler(`Digite o nome do projeto: `)
let qtd = Number(ler(`Digite a qtd de doações: `))
let meta = Number(ler(`Digite a meta de doações: `))
for (let i = 0; i < qtd; i++) {
    let num = ler(`Digite um valor para doar: `)
    doacoes.push(Number(num))
}


let soma = 0;
for(let i of doacoes) {
    soma += i;
}
let maior = Math.max(...doacoes)


console.log(`O projeto ${nomeproj} recebeu ${doacoes.length} doações, totalizando: R$${soma} \nAs doações recebidas foram: `)
for (let i of doacoes) {
    process.stdout.write(`${i} - `)
}
console.log(`A maior doação foi de: ${maior}`)
if (soma > meta) {
    console.log(`A meta foi atingida! ${soma} de ${meta} `)
} else if(soma < meta) {
    console.log(`A meta não foi atingida! ${soma} de ${meta} `)
}
