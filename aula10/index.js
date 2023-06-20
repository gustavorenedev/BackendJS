// Interação com arrays
const prompt = require("prompt-sync")();

// Percorrendo pelo array

// Exemplo 1
// const notas = [7, 8.2, 5, 3.5, 9, 4.6];
// for (let i = 0; i < notas.length; i++){
//     notas[i] = notas[i] + 1;
// }
// console.log(notas);

// Exemplo 2
// const nomes = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//     },
//     {
//         nome: "Gabriel",
//         sobrenome: "Rangel",
//     }
// ];
// for (let i = 0; i < nomes.length; i++){
//     let nomeCompleto = nomes[i].nome + " " + nomes[i].sobrenome;
//     console.log(nomeCompleto);
// }

// For of - imprime cada elemento do array
// Exemplo 1
// const nomes = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//     },
//     {
//         nome: "Gabriel",
//         sobrenome: "Rangel",
//     }
// ];

// for (let pessoa of nomes){
//     const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome;
//     console.log(nomeCompleto);
// }

// Foreach - interação com cada elemento e index
// Exemplo 1
// const itens = [
//   {
//     nome: "Arroz",
//     valor: 12.99,
//   },
//   {
//     nome: "Feijao",
//     valor: 5.2,
//   },
//   {
//     nome: "Sabão em pó",
//     valor: 12.99,
//   },
//   {
//     nome: "Picanha",
//     valor: 48.95,
//   },
// ];

// itens.forEach(function(elemento, index) {
//     console.log(index, " - ", elemento.nome);
//     elemento.valor += -2;
// });

// console.log(itens);

// itens.sort(function(e1, e2){
//     return e1.valor - e2.valor
// });

// console.log(itens);

// sort - ordenação do array(ordena ordem crescente ou alfabetica)
// Exemplo 1
// const numeros = [1, 7, 18, 23, 43, 233, 5];
// // sort crescente
// numeros.sort(function(n1, n2){
//     return n1 - n2;
// });

// console.log(numeros)

// -----------------------------------------------------------------

// Map - cria um novo array, realizando uma função em cada elemento, desconstrução
/*
Declaração 

array.map(function(item,index){
    return ...executar ação com item
})
*/

// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 10,
//     },
// ];

// const novosAlunos = alunos.map(function(item){
//     return item.nome + " " + item.sobrenome;
// });

// // retorna um array com os nomes completos
// console.log(novosAlunos);

// const novosAlunos = alunos.map(function(item){
//     return {
//         ...item, // copia todas as propriedados do item para o novo objeto
//         // o novo objeto vai ter uma nova propriedade nomeCompleto
//         nomeCompleto: item.nome + " " + item.sobrenome,
//     };
// });

// console.log(novosAlunos);

// Filter - cria um novo array com os elementos que passarem na condição
/*
Declaração 

array.filter(function(item){
    return ...executar ação com item
})
*/
// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 10,
//     },
// ];

// // retornar apenas os que tiraram nota maior ou igual a 8
// const novosAlunos = alunos.filter(function(item){
//     return item.nota >= 8;
// });

// console.log(novosAlunos);

// Reduce - cria um novo array passando por cada elemento
/*
Declaração 

array.reduce(function(total,item){
    return ...condição envolvendo total e item
}, 0) 0 => valor inicial reduce
*/

// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 10,
//     },
// ];

// const somaNotas = alunos.reduce(function(total, item){
//     return total + item.nota;
// }, 0);

// console.log(somaNotas);

// Every - retorna um boolean se todos os valores condizem com a condicao
/*
Declaração 

array.every(function(item){
    return ...condição item
})
*/

// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 10,
//     },
// ];

// const todasNotasMaiorQue9 = alunos.every(function(item){
//     return item.nota >= 9 // retorna um boolean, no contexto, todas as notas são maiores que 9 ? false
// });

// console.log(todasNotasMaiorQue9);

// Some - retorna um boolean se todos os valores condizem com a condicao
/*
Declaração 

array.some(function(item){
    return ...condição item
})
*/

// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 9,
//     },
// ];

// const alguemTirou10 = alunos.some(function (item){
//     return item.nota >= 10; // aqui percorre todos elementos e pergunta se alguem tirou maior ou igual a 10
// });

// console.log(alguemTirou10);

// // indexOf - retorna a posição de um elemento
// /*
// Declaração 

// array.indexOf((item))
// se retornar valor negativo, não existe
// */

// const alunos = [
//     {
//         nome: "Gustavo",
//         sobrenome: "Rene",
//         nota: 8,
//     },
//     {
//         nome: "André",
//         sobrenome: "Silva",
//         nota: 5,
//     },
//     {
//         nome: "Alan",
//         sobrenome: "Ferreira",
//         nota: 9,
//     },
// ];

// // desconstruindo o array e pegando todas as notas
// const notas = alunos.map(function(item){
//     return item.nota;
// });
// console.log(notas);

// // aqui ele busca a posição no array alunos de quem tirou a nota 8
// const indexNota8 = notas.indexOf(8)
// console.log(indexNota8);

// find - retorna o primeiro elemento que condiz com a condicao
/*
Declaração 

array.find(function(item){
    return ...condição item
})

*/

const alunos = [
    {
        nome: "Gustavo",
        sobrenome: "Rene",
        nota: 8,
    },
    {
        nome: "André",
        sobrenome: "Silva",
        nota: 5,
    },
    {
        nome: "Alan",
        sobrenome: "Ferreira",
        nota: 9,
    },
];

// desconstruindo o array e pegando todas as notas
const alunosNota8 = alunos.find(function(item){
    return item.nota === 8;
    // return item.nome === "André";
});
console.log(alunosNota8);