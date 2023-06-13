const prompt = require('prompt-sync')();

function parteAmerica(pais) {
  if (
    pais === "brasil" ||
    pais === "argentina" ||
    pais === "colombia" ||
    pais === "peru" ||
    pais === "chile"
  ) {
    return "O país é da América do Sul";
  } else {
    return "O país não é da América do Sul";
  }
}

let continuaOLoop = 's';
while (continuaOLoop === 's') {
  let pais = prompt("Digite um país: ");
  let parte = parteAmerica(pais);
  console.log("O país", pais, "é da América? ", parte);
  continuaOLoop = prompt("Digite 's' para continuar ou qualquer outro caracter para parar: ");
}
