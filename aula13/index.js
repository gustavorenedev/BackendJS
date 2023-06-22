const prompt = require("prompt-sync")();

// Datas

/*
Declaração

- const date = new Date() => data de hoje
- const date = new Date("2022-12-24") => data específica por string
- const date = new Date(ano, mes, dia, horas, minutos, segundos, ms)
- const date = new Date(milesegundos) => Timestamp
*/

// const date = new Date();
// console.log(" ")
// console.log(date)
// console.log(" ")
// console.log(date.toString());
// console.log(" ")
// console.log(date.toDateString());
// console.log(" ")
// console.log(date.toUTCString());
// console.log(" ")
// console.log(date.toISOString());
// console.log(" ")
// console.log(date.toLocaleDateString());

/*
Métodos

- date.toString() => Fri Dec 23 2022 21:00:00 GMT-0300 (Horário Padrão de Brasília)
- date.toDateString() => Fri Dec 23 2022
- date.toUTCString() => Sat, 24 Dec 2022 00:00:00 GMT
- date.toISOString() => 2022-12-24T00:00:00.000Z 
- date.toLocaleDateString() => 23/12/2022

GET
- getFullYear() = ano
- getMonth() = mes
- getDate() => dia
- getHours() = hora
- getMinutes() = minuto
- getSeconds() = segundo
- getMilleseconds() = milesegundo
- getTime() => mileseconds (Timestamp)

SET
- setDate() => dia
- setFullYear()
- setHours()
- setMilliseconds()
- setMinutes()
- setMonth()
- setSeconds()
- setTime()
*/
// console.log("\nGETS\n")
// console.log(date.getDate()); // pega o dia
// const mudandoHora = date.setHours(20); // mudando a hora
// console.log(new Date(mudandoHora).toString());

// Exemplo 1 - ifood, fiz um pedido e vai mostrar a hora e a data

const horaEMinutos = prompt("Digite a hora e minuto do pedido no formato: HH:mm - ");

const splitado = horaEMinutos.split(":");// através deste caracter nós vamos dividir a hora
const hora = Number(splitado[0]);
const minutos = Number(splitado[1]);

const dataAtual = new Date();
dataAtual.setHours(hora);
dataAtual.setMinutes(minutos);
console.log(`Pedido confirmado em: ${dataAtual.toString()}`);

const tempoDeEntrega = Number(prompt("Digite os minutos de entrega: "));
const minutosTotais = tempoDeEntrega + minutos;

let dataEntrega = dataAtual;

// Esse if se resume que se os minutos de entrega ultrapassar a hora, ele vai pegar os minutos acima de 60,
// vai fazer uma subtração - 60 para que o resto desta conta seja aplicado a nova hora que receberá + 1
if(minutosTotais > 60){
    const minutosExcedentes = minutosTotais - 60;
    dataEntrega.setHours(hora + 1);
    dataEntrega.setMinutes(minutosExcedentes);
} else {
    dataEntrega.setMinutes(minutosTotais);
}

console.log(`Data de entrega: ${dataEntrega.toString()}`);