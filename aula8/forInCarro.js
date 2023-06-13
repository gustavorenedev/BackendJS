const prompt = require('prompt-sync')();

const carro = new Object();

carro.ano = prompt("Digite o ano do carro: ");
carro.marca = prompt("Digite a marca do carro: ");
carro.modelo = prompt("Digite o modelo do carro: ");
carro.cor = prompt("Digite a cor do carro: ");
carro.valor = Number(prompt("Digite o valor do carro: "));

console.log("\n-----------------------------------------------");

for(let propriedade in carro){
    console.log("Dados do carro:")
    console.log(propriedade, ":", carro[propriedade]);
}