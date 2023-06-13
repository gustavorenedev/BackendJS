const prompt = require("prompt-sync")();
const receita = {
name: prompt("Informe o nome da receita: "),
ingredientes: prompt("Informe os ingredientes da receita: "),
preparacao: prompt("Informe o método de preparo: "),
    passoAPasso: function () {
        console.table(receita);
    }
};
receita.passoAPasso();