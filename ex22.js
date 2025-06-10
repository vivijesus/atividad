import prompt from "prompt-sync";
let ler = prompt();


console.log("\n--PROGRAMA DOS VETORES--\n")


let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


let j = Number(ler(`Digite o número do mes, considerando que Janeiro é igual á 0: `))


switch (j) {
    case 0:
        console.log(`O mes é ${mes[0]}`)
        break;
    case 1:
        console.log(`O mes é ${mes[1]}`)
        break;
    case 2:
        console.log(`O mes é ${mes[2]}`)
        break;
    case 3:
        console.log(`O mes é ${mes[3]}`)
        break;
    case 4:
        console.log(`O mes é ${mes[4]}`)
        break;
    case 5:
        console.log(`O mes é ${mes[5]}`)
        break;
    case 6:
        console.log(`O mes é ${mes[6]}`)
        break;
    case 7:
        console.log(`O mes é ${mes[7]}`)
        break;
    case 8:
        console.log(`O mes é ${mes[8]}`)
        break;
    case 9:
        console.log(`O mes é ${mes[9]}`)
        break;
    case 10:
        console.log(`O mes é ${mes[10]}`)
        break;
    case 11:
        console.log(`O mes é ${mes[11]}`)
        break;
    default:
        console.log(`O mes só vai de 0 à 11. Jovem padawan`)
        break;
}