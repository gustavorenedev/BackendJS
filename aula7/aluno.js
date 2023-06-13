const prompt = require('prompt-sync')();

const aluno = new Object();
aluno.nome = prompt("Digite seu nome: ");
aluno.matricula = prompt("Digite o número da sua matrícula: ");
aluno.nota1 = Number(prompt("Digite a primeira nota: "));
aluno.nota2 = Number(prompt("Digite a segunda nota: "));
aluno.nota3 = Number(prompt("Digite a terceira nota: "));
aluno.media = function() {
    return (this.nota1 + this.nota2 + this.nota3) / 3;
};

let media = aluno.media();

console.log("\n-----------------------------");
console.log("Dados do aluno: ");
console.log("Nome: ", aluno.nome);
console.log("Matricula: ", aluno.matricula);
console.log("Nota 1º: ", aluno.nota1);
console.log("Nota 2º: ", aluno.nota2);
console.log("Nota 3º: ", aluno.nota3);
console.log("Média final: ", media);