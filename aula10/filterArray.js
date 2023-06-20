/*
Utilizando o exercício 6, utilize a função `filter` para imprimir um array com os alunos 
que tenham mais de 180 de altura.
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
};

const acimaDe180 = alunos.filter((item) => {
    return item.altura > 180;
});

console.log("Alunos acima de 1,80m: ", acimaDe180);