// Objetos
// um ojeto pode receber todas as tipagens

/*
Declaração de um objeto

const nome_do_objeto = {
    nome_da_propriedade = valor
}
*/

/*
Acessar um objeto

const propriedade = objeto.propriedade
const { propriedade } = objeto // desconstrução
const propriedade = objeto["propriedade"]
*/

/*
Declarar uma função dentro do objeto

const objeto = {
    nome_da_funcao: function(parametros){
        __execução
    }
}
*/

const prompt = require('prompt-sync')();

// ficha de um funcionário

// const funcionario = {
    //     nome: "Gabriel",
    //     idade: 27,
    //     cargo: "Programador",
    //     salario: 3000
    // };
// cadastrar novo funcionário / novo objeto
// const funcionario = new Object();
// funcionario.nome = prompt("Digite o nome do funcionário: ")
// funcionario.idade = prompt("Digite a idade do funcionário: ")
// funcionario.cargo = prompt("Digite o cargo do funcionário: ")
// funcionario.salario = prompt("Digite o salário do funcionário: ")

// // primeira maneira de acessar
// console.log("------------------------");
// console.log("Dados do funcionário: ");
// console.log("Nome: ", funcionario.nome);
// console.log("Idade: ", funcionario.idade);
// console.log("Cargo: ", funcionario.cargo);
// console.log("Salário: ", funcionario.salario);

// // segunda maneira
// const { nome, idade, cargo, salario } = funcionario;
// console.log("------------------------");
// console.log("Dados do funcionário: ");
// console.log("Nome: ", nome);
// console.log("Idade: ", idade);
// console.log("Cargo: ", cargo);
// console.log("Salário: ", salario);

// criar um novo dado do usuario
// const funcionario = {
//     nome: "Gabriel",
//     idade: 27,
//     cargo: "Programador",
//     salario: 3000,
//     calcularSalarioAnual: function(){
//         const salarioAnual = 13 * this.salario
//         return salarioAnual
//     }
// };

// segunda maneira
// const { nome, idade, cargo, salario } = funcionario;
// console.log("------------------------");
// console.log("Dados do funcionário: ");
// console.log("Nome: ", nome);
// console.log("Idade: ", idade);
// console.log("Cargo: ", cargo);
// console.log("Salário: ", salario);
// console.log("Salário Anual: ", funcionario.calcularSalarioAnual());

// obs: atráves da palavra "this" é possível acessar uma propriedade do objeto dentro da função do objeto

// Segundo Exemplo
const carro = new Object()
carro.modelo = prompt("Modelo: ");
carro.marca = prompt("Marca: ");
carro.ano = prompt("Ano: ");
carro.cor = prompt("Cor: ");
carro.valor = Number(prompt("Valor: "));
carro.financiamento = function(numeroParcelas){
    return this.valor / numeroParcelas;
};

let nomeDaPropriedade = prompt("Digite o nome da propriedade do carro que deseja saber: ");
// a let retorna uma string que é armazenada o nome da propriedade que voce quer acessar
console.log("-------------------------");
console.log("Dados do carro: ");
// aqui eu passo como se fosse carro.propriedadeEscolhida
console.log(carro[nomeDaPropriedade]);

console.log("-------------------------");
console.log("Financiamento do carro: ");
let numeroParcelas = Number(prompt("Número de parcelas: "));
let valorFinanciamento = carro.financiamento(numeroParcelas);

console.log("Valor das parcelas do financiamento: ", valorFinanciamento);


