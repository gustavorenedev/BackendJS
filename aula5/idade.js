const prompt = require("prompt-sync")();

let Idade = Number(prompt("Digite a sua idade: "))

if (Idade >= 70){
    console.log("Idoso")
} else if(Idade < 70 && Idade > 30){
    console.log("Adulto")
} else if(Idade < 30 && Idade > 20){
    console.log("Jovem Adulto")
} else if(Idade < 20 && Idade > 15){
    console.log("Jovem")
} else {
    console.log("Criança ou adolescente")
}