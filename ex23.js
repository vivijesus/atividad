import prompt from "prompt-sync";
let ler = prompt();


console.log(`\n--PROGRAMA DOS VETORES--\n`)


let doacoes = [];
let nomeproj = ler(`Digite o nome do projeto: `)
while (true) {
    let num = ler(`Digite um valor para doar (ou -1 para finalizar): `)
    if(num == '-1') break;
    doacoes.push(Number(num))
}


let soma = 0;
for(let i of doacoes) {
    soma += i;
}


console.log(`O projeto ${nomeproj} recebeu ${doacoes.length} doações, totalizando: R$${soma} \nAs doações recebidas foram: `)
for (let i of doacoes) {
    process.stdout.write(`${i} - `)
}


