const prompt = require("prompt-sync")();

console.log("Opções de credenciais: ");
console.log("ADM");
console.log("FIN");
console.log("RH");

let credencial = prompt("Digite sua credencial: ");
// comparador "==" simboliza o mesmo valor sem analisar o tipo
// let acessoLiberado = credencial == "ADM";
// "!=" = diferente 
let acessoLiberado = credencial != "RH";
console.log("Acesso liberado: ", acessoLiberado);

console.log(" ")

let n1 = prompt("Digite o 1º numero: ");
let n2 = prompt("Digite o 2º numero: ");

console.log("n1 é maior que n2: ", n1 > n2);
console.log("n1 é maior ou igual que n2: ", n1 >= n2);
console.log("n1 é menor que n2: ", n1 < n2);
console.log("n1 é menor ou igual que: ", n1 <= n2);