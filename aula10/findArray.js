/*
Ainda utilizando o exercício de número 8, busque se há na lista algum elemento que seja “Arroz”, 
por meio da função `find`. Imprima o resultado na tela.
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

const elementoArroz = lista.find((item) => {
    return item.nome === "arroz";
});

console.log(elementoArroz);