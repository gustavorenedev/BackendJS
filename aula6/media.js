const prompt = require("prompt-sync")();

function calculaMedia(n1, n2, n3, n4){
    let media = (n1 + n2 + n3 + n4) / 4
    return media;
}

let primeiroNumero = Number(prompt("Digite o primeiro número: "));
let segundoNumero = Number(prompt("Digite o segundo número: "));
let terceiroNumero = Number(prompt("Digite o terceiro número: "));
let quartoNumero = Number(prompt("Digite o quarto número: "));

const mostrarMedia = calculaMedia(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero)
console.log(`a média entre ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero}, ${quartoNumero} é: ${mostrarMedia}`)
