/*
Escreva um sistema que o usuário insira as notas de 10 alunos de uma faculdade. 
Em seguida, através do comando sort, ordene a listagem de notas.
*/

const prompt = require("prompt-sync")();

const alunos = [];

for (let i = 0; i < 10; i++) {
    const aluno = {
    nome: prompt("Digite o nome do aluno: "),
    nota: Number(prompt("Digite a nota do aluno: "))
  } 
  alunos.push(aluno);
}  

alunos.sort(function(a1, a2){
    return a1.nota - a2.nota;
});

console.table(alunos);