const prompt = require("prompt-sync")();

console.log("Conversor")
let hora = Number(prompt("Digite as horas inteiras: "))
let minuto = hora * 60
let segundos = minuto * 60

console.log(`${hora} horas em minutos são: `, minuto, " minutos")
console.log(`${hora} horas em segundos são: `, segundos, " segundos")