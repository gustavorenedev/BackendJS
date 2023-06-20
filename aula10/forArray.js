/*
Escreva um programa que contenha uma listagem com ficha de funcionários, contendo nome e valor do salário. 
Utilizando o comando `for`, passe por cada um dos elementos do array, e dê um bônus salarial de 5% a mais para cada funcionário.*/

const funcionarios = [
  {
    nome: "Gustavo",
    salario: 1200,
  },
  {
    nome: "Gabriel",
    salario: 2000,
  },
];

for (let i = 0; i < funcionarios.length; i++){
    let bonus = funcionarios[i].salario + funcionarios[i].salario * 5/100
    console.log(`O bonus do ${funcionarios[i].nome} é de 5%, então o antigo salário que era de R$ ${funcionarios[i].salario} reais, agora é R$ ${bonus} reais`);
}
