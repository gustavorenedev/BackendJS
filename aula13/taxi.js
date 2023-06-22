/*
Escreva um algoritmo que o usuário entre a hora que solicitou um taxi. 
Em seguida, apresente a mensagem: “Solicitação confirmada em: [apresente a data]”. 
Depois, solicite a previsão de minutos para chegada”. Finalizando, 
apresente a data final estimada para chegada ao destino.
*/
const prompt = require("prompt-sync")();

const horaEMinutos = prompt("Digite a hora e minuto da solicitação do taxi no formato: HH:mm - ");

const splitado = horaEMinutos.split(":");
const hora = Number(splitado[0]);
const minutos = Number(splitado[1]);

const dataAtual = new Date();
dataAtual.setHours(hora);
dataAtual.setMinutes(minutos);
console.log(`Solicitação confirmada em: ${dataAtual.toLocaleDateString()}`);

const tempoDeChegada = Number(prompt("Digite os minutos de previsão de chegada: "));

let dataChegada = dataAtual;

const minutosTotais = tempoDeChegada + minutos;

if(minutosTotais > 60){
    const minutosExcedentes = minutosTotais - 60;
    dataChegada.setHours(hora + 1);
    dataChegada.setMinutes(minutosExcedentes);
} else {
    dataChegada.setMinutes(minutosTotais);
}

console.log(`Data de Chegada: ${dataChegada.toString()}`);
