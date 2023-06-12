const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite um número: "))
console.log(`O próximo número de ${num1} é: `, ++num1)