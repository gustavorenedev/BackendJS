const prompt = require('prompt-sync')();

do {
  let numero = parseInt(prompt("Digite um número (ou zero para sair): "));
  
  if (numero !== 0) {
    if (numero % 2 !== 0) {
      console.log("O número", numero, "é ímpar.");
    } else {
      console.log("O número", numero, "não é ímpar.");
    }
  }
} while (numero !== 0);