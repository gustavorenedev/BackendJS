/*
Crie uma solução na qual o usuário irá inserir o cadastro de 5 participantes de um evento, 
contendo nome e sobrenome e tipo de ingresso (Pista Gold, Pista Premium, Camarote). 
Utilizando o conceito do array.map, adicione as seguintes propriedades ao cadastro de cada participante: 
    1. Nome completo (utilizando interpolação de strings)
    2. Tipo de ingresso pista (string includes)
    3. Tipo de ingresso formatado (toUpperCase e trim)
*/

const prompt = require("prompt-sync")();

const participantes = [];

for (let i = 0; i < 5; i++) {
    const participante = {
    nome: prompt("Digite seu nome: "),
    sobrenome: prompt("Digite seu sobrenome: "),
    tipoIngresso: prompt("Digite qual ingresso você quer, Pista Gold, Pista Premium ou Camarote: "),
  };
  participantes.push(participante);
}

const participantesConfirmados = participantes.map((item) => {
    const tipoIngressoNoSpace = item.tipoIngresso.trim();
    const ingressoFormatado = tipoIngressoNoSpace.toUpperCase();
    return{
        nomeCompleto: `${item.nome} ${item.sobrenome}`,
        pista: `${ingressoFormatado.includes("PISTA")}`,
        ingresso: `${ingressoFormatado}`
    }
});

console.log(participantesConfirmados);