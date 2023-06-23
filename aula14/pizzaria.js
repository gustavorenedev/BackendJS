/*
1. Crie um sistema onde o usuário irá cadastrar os últimos 7 pedidos realizados em uma 
pizzaria. As informações inseridas deverão ser:
    1. Sabor da pizza: margerita, pepperoni, frango, portuguesa.
    2. Tamanho: 1, 2 ou 3
    3. Data do pedido: yyyy-mm-dd
    4. Hora do pedido: hh-mm
    5. Valor total

Valide os dados à cada entrada. Em seguida, formate os dados de cada item 
com data completa e o valor total seguindo os padrões do javascript. 
Por fim, calcule o valor total de todos os pedidos e apresente os 
dados formatados e o valor total na tela para o usuário.
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
            data: item.data.toLocaleDateString(),
            hora_do_pedido: [item.data.getHours(), item.data.getMinutes(), item.data.getSeconds()].join(':')
        }))
    }
    
    const validaDados = (itemEstoque) => {
        if(itemEstoque.preco <= 0) {
            throw "Preço não pode ser zero ou negativo!";
        }

        if(itemEstoque.tamanho === "1" || 
        itemEstoque.tamanho === "2" || 
        itemEstoque.tamanho === "3"){
            return;
        } else {
            throw "Tamanho deve ser 1, 2 ou 3!"
        }

    }

    const estoque = [];

    for (let i = 0; i < 2; i++) {
        console.log("Digite os dados da pizza: ");
        const item = {
            sabor: prompt("Sabor da pizza (margerita, pepperoni, frango ou portuguesa): "),
            preco: Number(prompt("Preço: ")),
            tamanho: prompt("Tamanho da pizza (1, 2 ou 3): "),
            data: new Date(),
        };
        validaDados(item);
        estoque.push(item);
    }
    const estoqueFormatado = formataEstoque(estoque)

    const valorTotal = estoque.reduce((total, item) => {
        return total + item.preco;
    }, 0);

    let valor = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency: "BRL",
    }).format(valorTotal);

    console.table(estoqueFormatado)
    console.log(`O valor total a se pagar é: ${valor}`)
} catch (error) {
    console.log("Erro no sistema: ", error);
}