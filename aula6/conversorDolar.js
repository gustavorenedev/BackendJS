const prompt = require("prompt-sync")();

function conversorDolar(real, moeda){
    switch(moeda){
        case 'dolar': {
            return real / 4.86
        }
        case 'euro': {
            return real / 5.24
        }
        case 'libra': {
            return real * 6.09
        }
    }
}

let quantosReais = Number(prompt("Digite quantos reais você quer converter: "));
let moeda = prompt("Digite qual moeda você quer converter: dolar, euro ou libra ");
let mostrarConversor = conversorDolar(quantosReais, moeda)

console.log(`${quantosReais} reais convertido em ${moeda} é: ${mostrarConversor}`)