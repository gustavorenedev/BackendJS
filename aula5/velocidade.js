const prompt = require("prompt-sync")();

let Velocidade = Number(prompt("Digite a sua velocidade: "))

Velocidade > 100 ? console.log("Carro em alta velocidade") : console.log("Velocidade normal!")