/*
Crie uma solução que contenha uma listagem pré definida de alunos de uma turma e suas notas. 
Em seguida, solicite ao usuário que escreve os próximos 3 alunos e suas respectivas notas. 
Adicione esses elementos (objetos) ao array no começo da listagem e imprima a lista na tela. 
Em seguida, remova os 3 últimos elementos da listagem e imprima o resultado final e o tamanho da listagem.
*/
const prompt = require("prompt-sync")();

const alunos = [
  {
    nome: "Filipe",
    nota: 9,
  },
  {
    nome: "Iago",
    nota: 8,
  },
  {
    nome: "Marcus",
    nota: 7,
  },
  {
    nome: "Marcos",
    nota: 8.5,
  },
];

for (let i = 0; i < 3; i++) {
  const aluno = {
    nome: prompt("Digite o nome do aluno: "),
    nota: Number(prompt("Digite a nota do aluno: "))
  }
  alunos.unshift(aluno);
}

console.table(alunos);

alunos.splice(alunos.length - 3, 3);

console.table(alunos);
console.log("Tamanho da listagem: ", alunos.length);