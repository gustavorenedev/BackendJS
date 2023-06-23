// Arrow Function
/*
Maneira mais moderna e simples de declara funções

const minhaFuncao = (n1,n2) => n1 * n2
    - pode ser declarada como constante
    - pode ter um retorno direto

EX: 
array.map((item) => item.name)
array.filter((item) => item.valor > 15)
*/

// Try Catch
/*
Usamos o comando para prevenção de quebras no nosso código:

try {
    ...execução do código
} catch(error){
    lidar com o error
}
    - comando throw: cria um erro customizado
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
        itemEstoque.tamanho === "g" || 
        itemEstoque.tamanho === "gg" ){
            return;
        } else {
            throw "Tamanho deve ser p, m, g ou gg!"
        }
    }

    const estoque = [];

    for (let i = 0; i < 2; i++) {
        console.log("Digite os dados do item para estoque: ");
        const item = {
            nome: prompt("Nome: "),
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
