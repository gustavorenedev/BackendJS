/*
Crie um algoritmo que tenha uma listagem com os carros dos seus sonhos, 
contendo o nome e valor dos veículos, e deixe a listagem ordenada de acordo com o valor *(sort)*. 
Em seguida, pela função `filter`, separe em dois novos arrays os veículos que tem valor abaixo e acima de 100mil reais. 
Imprima na tela as duas listagens.
*/

const carros = [
    {
        modelo: "Mercedes",
        valor: 50000,
    },
    {
        modelo: "Lamborghini",
        valor: 100000,
    },
    {
        modelo: "Ferrari",
        valor: 120000,
    },
    {
        modelo: "Corsa",
        valor: 8000,
    },
];

carros.sort(function(c1, c2){
    return c1.valor - c2.valor;
});
console.table(carros);

const carrosAcima = carros.filter(function(item){
    return item.valor >= 100000;
});

const carrosAbaixo = carros.filter(function(item){
    return item.valor < 100000;
});

console.log("Carros acima de 100 mil reais!")
console.table(carrosAcima)
console.log("Carros abaixo de 100 mil reais!")
console.table(carrosAbaixo)