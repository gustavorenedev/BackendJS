const prompt = require("prompt-sync")();

        // Colocar o Number(prompt("Digite o 1º número: "))
        // eu estou parseando o número de string para numero
        // pois o prompt retorna string
// let n1 = Number(prompt("Digite o 1º número: "));
// let n2 = Number(prompt("Digite o 2º número: "));

// FORMULAS MATEMÁTICAS
// console.log("Soma = ", n1 + n2);
// console.log("Subtração = ", n1 - n2);
// console.log("Multiplicação = ", n1 * n2);
// console.log("Divisão = ", n1 / n2);
// console.log("Resto divisão = ", n1 % n2);
// console.log("Exponenciação = ", n1 ** n2);

// Formas de INCREMENTAR E DECREMENTAR, mais utilizado em laço de repetição
// console.log("Ação do decremento: ", n1--);
// console.log("Após o decremento: ", n1);
// console.log("Decremento imediato: ", --n1);

// console.log("Ação do incremento: ", n1++);
// console.log("Após o incremento: ", n1);
// console.log("Incremento imediato: ", ++n1);

// OPERAÇÃO IMEDIATA
// console.log("Adição com 5: ", (n1 += 5));
// console.log("Divisão com 5: ", (n1 /= 5));
// console.log("Módulo por 5: ", (n1 %= 5));

// CONCATENAÇÃO
// let nome = prompt("Digite o seu nome: ");
// let sobrenome = prompt("Digite o seu sobrenome: ");
// console.log("Seu nome completo é: ", nome + " " + sobrenome);

// MEDIA 
let velocidade = Number(prompt("Digite sua velocidade em Km/h: "));
let horas = Number(prompt("Digite o tempo percorrido (em horas): "));
let distancia = velocidade * horas;

console.log("Distância percorrida: " + distancia + "km");




