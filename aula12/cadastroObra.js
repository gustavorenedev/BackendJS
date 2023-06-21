/*
2. Desenvolva um sistema que o usuário irá cadastrar um orçamento de obra. 
Para isso, será necessário inserir os dados no seguinte padrão:
    1. Material
    2. Custo
    
O sistema deverá perguntar repetidas vezes até o usuário desejar finalizar.
Ao finalizar, apresente a quantidade de material que inclua a palavra “cimento”, 
calcule o valor total da obra e formate também o valor total seguindo a formatação 
de moeda no JavaScript.
*/
const prompt = require("prompt-sync")();

let continuar = "s";
let somaCimento = 0;
const orcamento = [];

while (continuar !== "n"){
    const material = {
        nome: prompt("Digite o material: "),
        preco: Number(prompt(`Digite o valor: `))
    };    
    orcamento.push(material);
    
    const materialFormatado = material.nome.toLowerCase();

    if (materialFormatado === "cimento"){
        somaCimento += 1;
    };

    continuar = prompt("Digite s para sim e n para não, deseja adicionar mais um? ");
};

const somaMaterial = orcamento.reduce((total, item) => {
    return total + item.preco;
}, 0);

let valor = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency: "BRL",
}).format(somaMaterial);


console.log(`O valor total dos materiais é: ${valor}`);
console.log(`Existe ${somaCimento} materiais de cimento!`);

