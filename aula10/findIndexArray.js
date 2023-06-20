/*
Encontre no exercício 8 o index do elemento “Sabão”. Caso não haja (index -1), 
imprima a informação na tela.
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

let simplificandoArray = lista.map(function (item) {
    return item.item;
});

const index = simplificandoArray.indexOf("sabao");

console.log(lista);
console.log(
  "O index do elemento sabão esta localizado na posição de n°: " + index
);