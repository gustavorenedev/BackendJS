/*
Desenvolva um programa que o usuário insira um número ilimitado de itens de supermercado, 
contendo os valores e nome do item.. Através da função `reduce`, calcule o valor total da compra 
e apresente o resultado na tela.
*/
const prompt = require("prompt-sync")();

const lista = [];

let continuaOLoop = 's';
while (continuaOLoop === 's') {
    const produto = {
        nome: prompt("Digite o nome do produto: "),
        valor: Number(prompt("Digite o valor: ")),
    }
    lista.push(produto);
  continuaOLoop = prompt("Digite 's' para colocar outro item ou qualquer outro caracter para parar: ");
};
console.table(lista);

const precoTotal = lista.reduce((total, item) => {
    return total + item.valor;
}, 0);

console.log("Preço total a pagar: R$", precoTotal);