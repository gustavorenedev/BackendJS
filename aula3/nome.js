const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ")

console.log("Seu nome é diferente do meu ? ", nome == "Gustavo")