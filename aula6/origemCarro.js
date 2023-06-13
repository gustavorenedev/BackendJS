const prompt = require("prompt-sync")();

function origemCarro(carro){
    if (
    carro === 'volkswagen' || 
    carro === 'audi' || 
    carro === 'bmw' || 
    carro === 'mercedes'){
        return "Este carro é alemão";
    } else {
        return "Este carro não é alemão";
    }
}

let carro = prompt("Digite o carro para saber se é ou não de origem alemã: ")
const mostrarOrigem = origemCarro(carro)

console.log(mostrarOrigem)