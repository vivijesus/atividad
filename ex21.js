import prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let dia = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']


let j = Number(ler(`Digite o número do dia, considerando que Domingo é igual á 0: `))


switch (j) {
    case 0:
        console.log(`O dia é ${dia[0]}`)
        break;
    case 1:
        console.log(`O dia é ${dia[1]}`)
        break;
    case 2:
        console.log(`O dia é ${dia[2]}`)
        break;
    case 3:
        console.log(`O dia é ${dia[3]}`)
        break;
    case 4:
        console.log(`O dia é ${dia[4]}`)
        break;
    case 5:
        console.log(`O dia é ${dia[5]}`)
        break;
    case 6:
        console.log(`O dia é ${dia[6]}`)
        break;
    default:
        console.log(`O dia só vai de 0 à 6. Jovem padawan`)
        break;
}
