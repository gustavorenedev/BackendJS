/*
Utilizando o exercício 9, averigue se algum elemento tem o valor acima de R$50 (função `some`). 
Imprima o resultado na tela.
*/

// Código anterior
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

const acimaDe50 = lista.some((item) => {
    return item.valor > 50;
});

console.log("Algum dos itens são acima de R$ 50 reais ? ", acimaDe50);