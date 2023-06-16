/*
Desenvolva uma solução que contenha um array pré definido com valores de itens de supermercado. 
Solicite o usuário os próximos 3 itens que serão adicionados e os coloque ao final da listagem. 
Em seguida, imprima a lista final na tela.
*/
const prompt = require("prompt-sync")();

let listaMercado = [ "arroz","feijão","cafe"]

console.log(`A lista do mercado já possui ${listaMercado[0]}, ${listaMercado[1]} e ${listaMercado[2]}`)

for (let index = 0; index < 3; index++) {
   listaMercado.push(prompt("Digite o próximo alimento na lista: "))
}

console.table(listaMercado)