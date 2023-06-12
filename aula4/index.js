// operadores lógicos
const prompt = require("prompt-sync")();

// // &&
// let altura = prompt("Digite sua altura: ");
// let peso = prompt("Digite seu peso: ");
// let condicaoAltura = altura >= 120 && altura <= 180;
// let condicaoPeso = peso >= 68 && peso <= 80;

// console.log("Você pode ser um piloto da fórmula 1? ", condicaoAltura && condicaoPeso);

// // ||
// let letra = prompt("Digite uma letra: ");
// let condicaoVogal = letra == 'a' || letra == "e" || letra == "i" || letra == "o" || letra == "u"

// console.log("Letra é vogal: ", condicaoVogal)

// && e ||
let notaEnem = prompt("Digite a nota do ENEM: ");
let notaSeriado = prompt("Digite a nota do vestibular seriado: ");
let aprovado = notaEnem >= 700 || notaSeriado >= 500;

console.log("Aluno aprovado: ", aprovado);
console.log("Aluno reprovado: ", !aprovado);
