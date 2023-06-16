/*
Escreva um programa no qual o usuário irá inserir uma listagem inicial com o nome de 4 filmes 
que gostaria de assistir. Em seguida, solicite ao usuário o nome de 4 séries que gostaria de assistir. 
Em uma nova variável, salve o conjunto dos dois arrays e imprima o resultado na tela.
*/
const prompt = require("prompt-sync")();

const filmes = ['Velozes e furiosos', 'Homem-aranha', 'Pantera negra'];
const series = []
for(let i = 0; i < 5; i++){
    let nome = prompt("Digite o nome de uma série que você quer ver: ");
    series[i] = nome;
};

const novoArray = filmes.concat(series);
console.table(novoArray);