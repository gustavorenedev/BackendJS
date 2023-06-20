/*
Utilizando o exercício anterior, utilize a função `map` para criar um novo array 
que contenha somente o nome dos alunos e imprima o resultado na tela.
*/

// Exercicio anterior
const prompt = require("prompt-sync")();

const alunos = [];

for (let i = 0; i < 3; i++) {
    const aluno = {
    nome: prompt("Digite o nome do aluno: "),
    peso: Number(prompt("Digite o peso: ")),
    altura: Number(prompt("Digite a altura: ")),
  } 
  alunos.push(aluno);
}
console.log("Lista ordenada pela altura decrescente")
alunos.sort(function(a1, a2){
    return a2.altura - a1.altura;
});
console.table(alunos);

console.log("Lista ordenada pelo peso crescente")
alunos.sort(function(a1, a2){
    return a1.peso - a2.peso;
});
console.table(alunos);

const apenasNomes = alunos.map((item) => {
    return item.nome
});

console.log(apenasNomes)