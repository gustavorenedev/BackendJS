/*
Crie um algoritmo que tenha uma listagem (fixa) com os carros dos seus sonhos, contendo o nome e valor dos veículos, 
e deixe a listagem manualmente ordenada de acordo com o valor. Em seguida, pela função slice, separe em dois novos 
arrays os veículos que tem valor abaixo e acima de 100mil reais. Imprima na tela as duas listagens.
*/

const prompt = require("prompt-sync")();

const carrosSonhos = [
    {
        carro: 'Chevrolet',
        valor: 70000
    },
    {
        carro: 'Fiat',
        valor: 80000
    },
    {
        carro: 'Ferrari',
        valor: 120000
    },
    {
        carro: 'Porsche',
        valor: 130000
    },
    {
        carro: 'Mercedes',
        valor: 140000
    }
]

const novoArray = carrosSonhos.slice(0, 2);
console.log("Carros abaixo de 100 mil")
console.table(novoArray);

const novoArray2 = carrosSonhos.slice(2, 5);
console.log("Carros acima de 100 mil")
console.table(novoArray2);