/*
Faça um programa que solicite ao usuário o nome e a data de nascimento.
 Apresente os dados no terminal após 2s.
*/
const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ")
const data = prompt("Digite sua data de nascimento: ")

setTimeout(() => {
    return console.log(`Seu nome é ${nome} e você nasceu em ${data}`)
}, 3000);