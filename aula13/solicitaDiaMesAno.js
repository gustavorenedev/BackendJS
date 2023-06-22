/*
Desenvolva um sistema que solicite o usuário o dia, mês e ano. 
Em seguida, apresente a data no formato de date string, UTC e ISO.
*/

const prompt = require("prompt-sync")();

const dia = prompt("Digite o dia: ");
const mes = prompt("Digite o mês: ");
const ano = prompt("Digite o ano: ");

const date = new Date(ano, mes, dia);

console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toISOString());