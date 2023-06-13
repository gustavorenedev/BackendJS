const prompt = require('prompt-sync')();

numeroMaior = 0
numeroMenor = 0
for (let i = 0; i < 5; i++){
    let numero = Number(prompt(`Digite o ${i + 1}º número: `));
    if (i == 1){
        numeroMaior = numero
        numeroMenor = numero
    }
    if (numero > numeroMaior){
        numeroMaior = numero
    }
    if (numero < numeroMenor){
        numeroMenor = numero
    }
}

console.log(`O maior número é ${numeroMaior} e o menor número é ${numeroMenor}`)