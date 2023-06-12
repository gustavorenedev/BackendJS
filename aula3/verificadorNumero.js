const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o 1º numero: "));
let n2 = Number(prompt("Digite o 2º numero: "));

console.log(`${n1} e ${n2} são iguais ? `, n1 === n2)