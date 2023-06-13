const prompt = require("prompt-sync")();

const planeta = {
    nome: prompt("Digite o nome do planeta: "),
    tamanho: Number(prompt("Digite o tamanho do planeta: ")),
    distancia: Number(prompt("Digite a distância entre o planeta e a terra em km: ")),
    velocidade: Number(prompt("Digite a velocidade que você quer percorrer em km: ")),
    tempoParaChegar: function() {
        tempo = this.distancia / this.velocidade;
        return tempo
    }
};

console.log("O tempo para se chegar é de: ", planeta.tempoParaChegar(), " dias.");