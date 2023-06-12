const prompt = require("prompt-sync")();

let timeNome = prompt("Digite o nome do seu time: ");
let timePontuacao = Number(prompt("Digite a pontuação do seu time no campeonato: "));

if (timePontuacao >= 75){
    console.log(`Parabéns ${timeNome}, excelentes chances de classificação!`)
} else if (timePontuacao <= 75 && timePontuacao >= 65){
    console.log(`${timeNome}, boas chances de classificação!`)
} else{
    console.log(`${timeNome}, chances baixas de classificação!`)
}