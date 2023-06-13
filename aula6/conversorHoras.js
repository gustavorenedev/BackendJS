const prompt = require("prompt-sync")();

function converteHoras(horas){
    let conversor = horas * 60 
    return conversor;
}

let horas = Number(prompt("Digite que horas você quer converter para minutos: "));

const mostrarConversor = converteHoras(horas)
console.log(`${horas} horas são ${mostrarConversor} minutos!`)
