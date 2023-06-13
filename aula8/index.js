const prompt = require('prompt-sync')();
// Estruturas de repetição

// FOR - quando eu ja tenho o limite estabelecido de repetição
/*
Declaração 

for (let i = 0; i < 5; i++){
    //execute
}
*/

// let somaTotal = 0;

// for(let i = 0; i < 10; i++){
//     let valorProduto = Number(prompt(`Digite o valor ${i + 1} º do produto: R$ `))
//     somaTotal += valorProduto;
// }

// console.log("O valor da sua compra é: R$ ", somaTotal);

// ----------------------------------------------------------------------------------

// FOR IN - Utilizado para percorrer os dados de um objeto

/*
Declaração

for (let propriedade in aluno){
    console.log(propriedade + " : " + aluno[propriedade])
}
*/

// const piloto = new Object();

// piloto.nome = prompt("Digite o nome do piloto: ");
// piloto.equipe = prompt("Digite o nome da equipe do piloto: ");
// piloto.tempoDeProva = prompt("Tempo de Prova: ");
// piloto.posicao = prompt("Digite a posição do piloto: ");

// console.log("\n-----------------------------------------------");

// for(let propriedade in piloto){
//     console.log(propriedade, ":", piloto[propriedade]);
// }

// ----------------------------------------------------------------------------------

// While - Utilizado para fazer de uma maneira indefinida, enquanto for true
// Do while - Ele executa primeira a instrução depois a validação
/*
Declaração - While

let i = 0;
while (i < 5) {
    console.log("Número: ", i);
    i++;
}

Declaração - Do While

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
*/

function checarNumeroPar(numero){
    return numero % 2 === 0;
}

let continuaOLoop = 'n'
while(continuaOLoop == 's') {
    let numero = prompt("Digite o número: ");
    let numeroEpar = checarNumeroPar(Number(numero));
    console.log("O número", numero, "é par: ", numeroEpar ? 'par' : 'ímpar');
    continuaOLoop = prompt("Digite s para continuar ou qualquer outro caracter para para: ");
}
