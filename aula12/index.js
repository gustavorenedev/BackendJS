// Métodos de cada Type

// Métodos String
// length - Tamanho de String
// const nome = "Gustavo René Dias";
// console.log("Nome: ", nome);
// console.log("Tamanho da string: ", nome.length);

// // slice(inicio, fim), substring(inicio, fim), substr(inicio, tamanho) - Extração
// console.log("Primeiro nome: ", nome.substring(0, 7)); // quantos caracteres você quer

// // replace(argumento, novo texto), replaceAll(argumento, novo texto) - Substituição
// console.log("Outro nome: ", nome.replace("Gustavo", "André"));
// // utilizando uma regex, para que ele ignore se a string começa de caracter maiusculo
// console.log("Outro nome com regex: ", nome.replace(/gustavo/i, "André"));

// // toUpperCase() - Todo o texto em maiúsculo
// // toLowerCase() - Todo o texto em minúsculo
// console.log("Maiúsculo:", nome.toUpperCase(), " Minúsculo:", nome.toLowerCase());

// // concat() - Junção

// // trim(), trimStart(), trimEnd() - Retirar espaços em branco
// const semEspaço = nome.trim()
// console.log("Sem espaço: ", semEspaço);

// // charAt(posicao), texto[posicao] - Caractér na posição
// console.log("1º posição: ", nome.charAt(0));

// // split(caracter) - Separação
// console.log("Separado: ", nome.split(" ")); // transforma cada palavra em um elemento em um array;

// /*
// Métodos de pesquisa
// - indexOf("texto")
// - lastIndexOf("texto")
// - search("texto") => retorna a posição
// - match("texto") => retorna um array com os resultados
// - matchAll("texto) 
// - includes("texto") => boolean
// - startsWith("texto") => boolean
// - endsWith("texto") => boolean
// */
// console.log("Include: ", nome.includes("Gustavo"));
// console.log("Include: ", nome.includes("Rodrigues"));

// // Interpolação de string
// const nome1 = "Gustavo";
// const sobrenome = "René";
// const nomeCompleto = `Meu primeiro nome é ${nome1} e o sobrenome é ${sobrenome}`;
// console.log(nomeCompleto);

// --------------------------------------------------------------------------------------

/*
Numbers

- toString - transforma um número em uma string
- toExponential(numero) - retorna uma string arredondando para uma notação exponencial
- toFixed(numero) - retorna uma string com a quantidade de números decimais especificados
- toPrecision(numero) - retorna uma string com o número escrito com tamanho especificado

Conversão:
    - Number() - transforma em número
    - parseFloat() - transforma em número float
    - parseInt() - transforma em número int

Formatação de moeda
let number = 10
let valor = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency: "BRL",
}).format(number);
*/
const preco = 12.9;

let valor = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency: "BRL",
}).format(preco);

console.log(valor)
console.log(preco.toFixed(2))

// --------------------------------------------------------------------------------------
// Identificando tipos
/*
typeof "Gustavo" = string
typeof 347 = number
typeof true = boolean
typeof { nome: "Gustavo", emprego: "programador" } = object
typeof function() {} = function
typeof [1,2,3,4] = object
*/