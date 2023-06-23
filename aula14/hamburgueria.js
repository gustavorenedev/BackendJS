/*
1. Desenvolva um sistema que cadastre 5 opções de menu te uma hamburgueria. 
O usuário deverá inserir os seguintes dados:
    1. Nome do lanche
    2. Valor
    3. Tamanho: p, m, g 

Valide os dados de entrada utilizando uma arrow function, e caso ocorra um erro, 
utilize a função throw. Em seguida, utilizando o console.table, 
apresente as informações na tela.
*/

const prompt = require("prompt-sync")();

try {
    const formataEstoque = (estoque) => {
        return estoque.map((item) => ({
            ...item,
            preco: new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(item.preco),
            tamanho: item.tamanho.toUpperCase(),
        })) 
    }

    const validaDados = (itemEstoque) => {
        if(itemEstoque.preco <= 0) {
            throw "Preço não pode ser zero ou negativo!";
        }

        if(itemEstoque.tamanho === "p" || 
        itemEstoque.tamanho === "m" || 
        itemEstoque.tamanho === "g"){
            return;
        } else {
            throw "Tamanho deve ser p, m ou g!"
        }
    }

    const estoque = [];

    for (let i = 0; i < 2; i++) {
        console.log("Digite os dados do lanche: ");
        const item = {
            nome: prompt("Nome do lanche: "),
            preco: Number(prompt("Preço: ")),
            tamanho: prompt("Tamanho: "),
        };
        validaDados(item);
        estoque.push(item);
    }

    const estoqueFormatado = formataEstoque(estoque)
    console.table(estoqueFormatado)
} catch (error) {
    console.log("Erro no sistema: ", error);
}
