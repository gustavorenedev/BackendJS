const prompt = require('prompt-sync')();
// Arrays 

/*
Declarações de Arrays - Salvar sempre o mesmo tipos de dados em um array

const nome_do_array = [...dados]

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
const listaDeNomes = ["Gabriel", "João", "Luiz", "Amanda", "Ana", "Marina"];
const velocidadeNasVoltas = [120, 110, 100, 112, 125, 114];
const listagemDeAlunos = [
    {
        nome: "Gabriel",
        matricula: 12312312,
    },
    {
        nome: "Gustavo",
        matricula: 15312312,
    },
    {
        nome: "Lucas",
        matricula: 12345432,
    },
]
*/

/*
Acessando os elementos do array - o primeiro elemento é 0

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
let primeiroCarro = carros[0];
*/

/*
Alterando ou estabelecendo o valor de um elemento
// Iniciando
const carros = [];
carros[0] = "Nissan";

// Alterando
const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
carros[0] = "Nissan";
*/

// // Exemplo 1 
// const alunos = ["João", "Lucas", "Ana", "Marcos", "Helena"];
// console.log(alunos);

// // Acessando o aluno pelo index
// let primeiroAluno = alunos[0];
// console.log(primeiroAluno);

// // Alterando o aluno
// alunos[0] = "Henrique"
// console.log(alunos)

// -------------------------------------------------------------
// // Exemplo 2
// const alunos = []
// for(let i = 0; i < 5; i++){
//     let novoAluno = prompt("Digite o nome do aluno: ");
//     alunos[i] = novoAluno;
// }

// console.log("Listagem final de alunos: ", alunos);
// /*
// Tamanho do array - .length

// const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
// const tamanho = carros.length; // 4 elementos
// const ultimoElemento = carros[carros.length - 1]; // "Audi"
// */
// console.log("Quantidade total de alunos: ", alunos.length);
// console.log("Último aluno: ", alunos[alunos.length - 1]);

// -------------------------------------------------------------
// // Exemplo 3
// const alunos = []
// for(let i = 0; i < 5; i++){
//     let novoAluno = {
//         nome: prompt("Digite o nome do aluno: "),
//         nota: prompt("Digite a nota do aluno: ")
//     }
//     alunos[i] = novoAluno;
// }

// console.log("Listagem final de alunos: ", alunos);
// console.log("Quantidade total de alunos: ", alunos.length);
// console.log("Último aluno: ", alunos[alunos.length - 1]);

/*
Adicionar um novo elemento

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
carros.push("Mercedes"); - .push = adiciona ao final da lista

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
carros.unshift("Mercedes"); - .unshift = adiciona ao começo da lista
*/

// -------------------------------------------------------------
// // Exemplo 4
// const nomeDasMarcas = [];
// let i = 0;
// do {
//     let marca = prompt("Digite o nome da marca: ");
//     nomeDasMarcas.push(marca);
//     // nomeDasMarcas.unshift(marca); - fará o contrário da lista acima pois sempre joga o ultimo elemento adicionado ao primeiro
//     i++
// } while(i < 5);

// console.log("Listagem final: ", nomeDasMarcas);

/*
Remover elementos

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
carros.pop(); - .pop() = remove o ultimo elemento
carros.shift(); - .shift() = remove o primeiro elemento
*/

// -------------------------------------------------------------
// // Exemplo 5
// const nomeDasMarcas = ['Nike', 'Adidas', 'Gucci', 'Balenciaga', 'Prada'];
// console.log("Elemento removido: ", nomeDasMarcas.pop()); // nome da marca removida
// console.log("Elemento removido: ", nomeDasMarcas.shift()); // nome da marca removida
// console.log("Listagem final: ", nomeDasMarcas);

/*
Adicionar arrays - concatenar

const carros1 = ["Fiat", "Volkswagen", "BMW", "Audi"];
const carros2 = ["Mercedes", "Chevrolet", "Volvo", "Subaru"];
const novoArray = carros1.concat(carros2);

console.log(novoArray);

*/

// -------------------------------------------------------------
// // Exemplo 6
// const nomeDasMarcas1 = ['Nike', 'Adidas', 'Gucci'];
// const nomeDasMarcas2 = [ 'Balenciaga', 'Prada'];

// const novoArray = nomeDasMarcas1.concat(nomeDasMarcas2);
// console.log(novoArray);

/*
Remover ou adicionar elementos em uma posição estabelecida - Splice e Slice

Splice

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
carros.splice(2, 0, "Volvo", "Mercedes"); - .splice = (posicao, quantos_elementos_remover, ...elementos_adicionar)
console.log(carros);

Slice - Cria um novo array a partir da posição que eu colocar

slice(1) ele basicamente corta da posição colocada e cria um array com todos para frente ignorando os atras do indice no caso ignora o elemento 0
slice(1, 2) ele basicamente corta da posição colocada e cria um array da posição 1 até a 2

const carros = ["Fiat", "Volkswagen", "BMW", "Audi"];
const novosCarrosApartir = carros.slice(1);
const novosCarrosEntre = carros.slice(1, 2);
console.log(novosCarrosApartir);
console.log(novosCarrosEntre);
*/

// -------------------------------------------------------------
// // Exemplo 7 - splice
// const nomeDasMarcas = ['Nike', 'Adidas', 'Gucci'];

// nomeDasMarcas.splice(1, 1, "Puma", "Lacoste"); // Na posição 1 do array ele vai adicionar nike e adidas e não vai remover ninguém
// // pois foi passado 0 de remover
// console.log(nomeDasMarcas);

// -------------------------------------------------------------
// // Exemplo 8 - slice
const nomeDasMarcas = ['Nike', 'Adidas', 'Gucci', 'Puma', 'Rebook', 'Converse'];

const novoArray = nomeDasMarcas.slice(2);
const novoArray2 = nomeDasMarcas.slice(2, 4);
console.log(novoArray);
console.log(novoArray2);