const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite a 1º nota: "));
let n2 = Number(prompt("Digite a 2º nota: "));

console.log("A primeira nota é maior que a segunda ?", n1 > n2)
console.log("A segunda nota é maior que a primeira ?", n2 > n1)