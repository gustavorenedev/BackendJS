/*
1. Desenvolva um sistema que irá cadastrar as 5 corridas inicias de um 
motorista de aplicativo. Os dados inseridos devem ser:
    1. Horário de início da corrida
    2. Distância em km
    3. Tempo até o destino
    4. Valor da corrida

Em seguida, formate os dados, adicionado a propriedade de horário final de chegada 
ao destino e também o valor da corrida. Por fim, apresente os dados formatados, 
o valor total das soma das corridas e também a soma de distância percorrida.
*/
const prompt = require("prompt-sync")();

let corridas = [];

for (let i = 0; i < 2; i++) {
  const novaCorrida = new Object();
  novaCorrida.valor = Number(prompt("Digite o valor da corrida: "));
  corridas.push(novaCorrida);
}

const formataDados = () => {
  corridas = corridas.map((item) => {
    return {
      ...item,
      valorFormatado: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.valor),
    };
  });
};

const calculaValorTotal = () => {
  let valorTotal = corridas.reduce(function (total, valores) {
    return total + valores.valor;
  }, 0);

  return valorTotal;
};

formataDados();
const valorTotal = calculaValorTotal();
console.table(corridas);
console.log("Valor total: ", new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(valorTotal));

