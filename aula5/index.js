const prompt = require("prompt-sync")();

// Exemplo 1
// let nomeJogador = prompt("Digite o nome do jogador: ");
// if (nomeJogador == "neymar") {
//     console.log("É o melhor jogador!");
// } else {
//     console.log("Bom jogador!")
// }

// Exemplo 2
// let notaExatas = Number(prompt("Digite sua nota de exatas: "));
// let notaHumanas = Number(prompt("Digite sua nota de humanas: "));
// let notaRedacao = Number(prompt("Digite sua nota de redacao: "));

// let media = (notaExatas + notaHumanas + notaRedacao) / 3;
// console.log("Média: ", media);

// if (media >= 900) {
//     console.log("Você tem chances de passar na faculdade de medicina");
// } else if (media >= 700){
//     console.log("Aprovação provável em outros cursos");
// } else {
//     console.log("Aprovação improvável");
// }

// em operador ternário
// media > 900 
//     ? console.log("Aprovação em medicina") 
//     : console.log("Reprovado em medicina")

// switch
// let nomeSelecao = prompt("Digite o nome da seleção: ");
// switch(nomeSelecao) {
//     case 'Brasil': {
//         console.log("Maior campeão");
//         break
//     }
//     case 'Italia': {
//         console.log("4 titulos");
//         break 
//     }
//     case 'alemanha': {
//         console.log("3 titulos");
//         break
//     }
//     case 'argentina': {
//         console.log("La mano de Dios");
//         break
//     }
//     default: {
//         console.log("Seleção não encontrada!");
//     }
// }