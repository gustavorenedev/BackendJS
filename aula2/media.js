const prompt = require("prompt-sync")();

console.log("Calculo Média")
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o sgundo número: "))

media = (num1 + num2) / 2

console.log("A média entre esses números é: ", media)