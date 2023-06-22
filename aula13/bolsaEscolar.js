/*
Crie um sistema que solicite o usuário o cadastro de 5 participantes de um processo seletivo 
para uma bolsa escolar, contento nome e data de nascimento (ano-mes-dia). 
A partir disso, apresente quantos nasceram no mesmo ano e quantos nasceram no mesmo mês.
*/
const prompt = require("prompt-sync")();

const candidato = [];
const mesmoAno = [];
const mesmoMes = [];

for (i = 0; i < 3; i++) {
  const dados = new Object();
  dados.nome = prompt("Digite o nome do candidato : ");
  const data = prompt("Digite a data de nascimento:(aaaa-mm-dd) ");
  dados.data = new Date(data);
  candidato.push(dados);
}

candidato.map(function (estudante) {
  checkMesmoAno(estudante);
  checkMesmoMes(estudante);
});

function checkMesmoAno(estudante) {
  let ano = estudante.data.getFullYear();
  let checkMesmoAno = candidato.filter(function (item) {
    return item.data.getFullYear();
  });

  if (checkMesmoAno.length > 0) {
    let alerta = mesmoAno.some(function (item) {
      return item.ano === ano;
    });
    if (!alerta) {
      mesmoAno.push({
        ano,
        qtd: checkMesmoAno.length,
      });
    }
  }
}
function checkMesmoMes(student) {
  let mes1 = student.data.getMonth();
  let mes = mes1 + 1;
  let checkMesmoMes = candidato.filter(function (item) {
    return item.data.getMonth();
  });

  if (checkMesmoMes.length > 0) {
    let alertames = mesmoMes.some(function (item) {
      return item.mes === mes;
    });
    if (!alertames) {
      mesmoMes.push({
        mes,
        qtdd: checkMesmoMes.length,
      });
    }
  }
}

console.table(candidato);
console.log("mesmo ano: ");
console.table(mesmoAno);
console.log("mesmo mes: ");
console.table(mesmoMes);