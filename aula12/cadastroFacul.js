/*
Desenvolva um sistema que solicite ao usuário o nome, sobrenome, idade e faculdade e salário de 4 pessoas. 
Utilizando a interação de arrays, crie um novo array que contenha no cadastro de cada pessoa, 
além das informações cadastradas, as inicias da pessoa (1 letra do nome e 1 letra do sobrenome), 
se a formação é engenharia ou não, e formate o salário em duas casas decimais. 
*/

const prompt = require("prompt-sync")();

const alunos = [];

for (let i = 0; i < 2; i++) {
    const aluno = {
    nome: prompt("Digite seu nome: "),
    sobrenome: prompt("Digite seu sobrenome: "),
    faculdade: prompt("Digite sua faculdade: "),
    idade: Number(prompt("Digite sua idade: ")),
    salario: Number(prompt("Digite seu salário: ")),
  };
  alunos.push(aluno);
};

const alunosInscritos = alunos.map((item) => {
    const primeiraLetraNome = item.nome.charAt(0).toUpperCase;
    const primeiraLetraSobrenome = item.sobrenome.charAt(0).toUpperCase;
    const faculdadeFormatado = item.faculdade.toLowerCase().trim();

    return{
        primeiraLetraNome: `${primeiraLetraNome}`,
        primeiraLetraSobrenome: `${primeiraLetraSobrenome}`,
        engenharia: `${faculdadeFormatado.includes("engenharia")}`,
        salario: `${item.salario.toFixed(2)}`
    }
});

console.log(alunosInscritos);
