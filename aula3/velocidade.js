const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite a 1º velocidade em km: "));
let n2 = Number(prompt("Digite a 2º velocidade em km: "));

console.log("A primeira velocidade é maior que a segunda ?", n1 > n2)
console.log("A segunda velocidade é maior que a primeira ?", n2 > n1)