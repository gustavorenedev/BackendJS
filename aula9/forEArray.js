const prompt = require('prompt-sync')();

/*
Desenvolva uma solução que preencha dinamicamente 
através do comando for preencha um array de nomes de seus familiares.
*/

const familia = [];
for(let i = 0; i < 5; i++){
    let nome = prompt("Digite o nome de um familiar: ");
    familia[i] = nome;
};

console.log(familia);