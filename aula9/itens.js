/*
Desenvolva um programa que tenha uma lista de compras dos itens de tecnologia que você deseja comprar futuramente. 
Em seguida, por meio do terminal, escreva mais 2 elementos que deseja inserir nessa listagem. Pela função splice, 
remova os 2 últimos elementos e adicione esses dois novos. Ao final, imprima a nova listagem na tela.
*/

const prompt = require("prompt-sync")();

let novaLista = [];
let itens = ['teclado', 'mouse', 'monitor', 'computador'];

console.log(itens);

for (let index = 0; index < 2; index++) {
    novaLista.push(prompt("Adicione outro produto que você deseja comprar: "))
}

itens.splice(itens.length - 2, 2, novaLista[0], novaLista[1]);
console.table(itens);