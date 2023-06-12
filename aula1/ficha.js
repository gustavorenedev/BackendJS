// armazenando na variavel prompt o pacote prompt-sync
// dentro dessa variavel eu posso utilizar a biblioteca
const prompt = require('prompt-sync')();

// npm gerenciador de pacotes
// json = dependencias para rodar o projeto
let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let contratado = true;
let pagamento = null;
let cargo;

console.log("-------------------------------");
console.log("Dados da ficha: ");
console.log("-------------------------------");
console.log("Nome do funcionário: ", nome);
console.log("Idade: ", idade);
console.log("Já foi contratado: ", contratado);
console.log("Pagamento a receber: ", pagamento);
console.log("Cargo: ", cargo);