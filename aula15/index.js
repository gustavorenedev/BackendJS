// Promise, Async Await

/*
Set Timeout e Set Interval

Quando precisamos executar uma função em um período específico ou a cada ciclo de tempo,
utilizamos essas funções. 
EX: Páginas de redirecionamento, aplicativos de 2 fatores, contagens regressiva
*/
// // temporizador
// setTimeout(() => {
//     console.log("Executado após 3s")
// }, 3000);

// // repete o mesmo a cada 1.5s
// setInterval(() => {
//     console.log("Executado após 1.5s")
// }, 1500);

/*
Promise

Utilizamos quando:
- Processamento assíncrono (dado vai estar disponível no futuro)
- Funções que exigem grande processamento de dados
- Requisições na internet (http -> rest)

Declaração:
new Promise(resolve, reject)
- resolve -> retorna o resultado da promise
- reject -> retorna o erro da promise

Métodos:
- then -> executado após a execução completa da promise
- catch -> executado quando a promise é rejeitada
*/

// const timeout = (tempo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, tempo);
//     });
// };

// timeout(3000)
//     .then(() => {
//         console.log("Executado após 3s");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Fetch - é a maneira do front chamar o back
// O fetch gerou uma promise que foi retornada pelo then todas as informações da API,
// depois fiz mais um then porque esse data.json é outra promise, e então gerou o resultado
// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((data) => {
//         return data.json();
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// Async Await
/*
Utilizamos quando: 
- processamento assíncrono (dado vai estar disponível no futuro)
- Ao invés do promisa para ter uma escrita mais fluída

Declaração:
const funcaoAsync = async (params) -> {...execucao}
const resultado = await funcaoAsync()

OBS:
- node.js v > 18
- package.json = "type": "module"
*/
// const getPokemons = async() => {
//     const resultado = await fetch("https://pokeapi.co/api/v2/pokemon")
//     return resultado.json();
// };

// const pokemons = await getPokemons();

// console.log(pokemons);