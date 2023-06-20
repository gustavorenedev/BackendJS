/*
Utilizando o comando `for of` passe por cada elemento de uma listagem de clientes de uma empresa. 
Cada dado de cliente deve conter: nome do cliente, 2 dois saldos a receber (saldo1, saldo2). 
Calcule o saldo total de cada cliente, adicione essa nova propriedade ao elemento respectivo da lista. 
Ao final, imprima toda listagem na tela.
*/

const clientes = [
  {
    nome: "Gustavo",
    saldo1: 1220,
    saldo2: 2000,
  },
  {
    nome: "Gabriel",
    saldo1: 520,
    saldo2: 2400,
  },
];

for (let pessoa of clientes){
    const saldoTotal = pessoa.saldo1 + pessoa.saldo2
    console.log(`O Saldo total do ${pessoa.nome} é de R$ ${saldoTotal} reais`);
}