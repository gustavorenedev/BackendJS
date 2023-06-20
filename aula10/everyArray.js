/*
Utilizando o exemplo anterior, cheque se na listagem todos os itens tem um valor acima de R$10. 
Dica: método `every`. Imprima o resultado na tela.
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

const acimaDe10 = lista.every((item) => {
    return item.valor > 10;
});

console.log("Todos os itens são acima de R$ 10 reais ? ", acimaDe10);