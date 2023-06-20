/*
Crie um programa que solicite que o usuário entre com 5 nome de jogadores e a 
quantidade de gols e assistências na temporada. Em seguida, 
através do comando `forEach`, imprima na tela a quantidade total de lances para gol 
(gols + assistência) esse jogador contribuiu.
*/
const prompt = require("prompt-sync")();

const jogadores = [];

for (let i = 0; i < 5; i++) {
    const jogador = {
    nome: prompt("Digite o nome do jogador: "),
    gols: Number(prompt("Digite a quantidade de gols: ")),
    assistencias: Number(prompt("Digite a quantidade de assistências: "))
  } 
  jogadores.push(jogador);
}
console.table(jogadores);

jogadores.forEach(function(elemento, index){
  const total = elemento.gols + elemento.assistencias
  console.log(`${index + 1} - ${elemento.nome}, contribuição na temporada(gols + assistências): ${total}`)
})
