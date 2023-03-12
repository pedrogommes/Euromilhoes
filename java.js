

function gerarNumeros() {
  let numeros = [];
  let estrelas = [];

  while (numeros.length < 5) {
    var numero = Math.floor(Math.random() * 50) + 1;
    if (numeros.indexOf(numero) === -1) numeros.push(numero);
  }

  while (estrelas.length < 2) {
    var estrela = Math.floor(Math.random() * 12) + 1;
    if (estrelas.indexOf(estrela) === -1) estrelas.push(estrela);
  }

  return {
    numeros: numeros,
    estrelas: estrelas
  };
}

let numerosDiv = document.getElementById("numeros");
let estrelasDiv = document.getElementById("estrelas");

document.querySelector("#gerarNumerosBtn").addEventListener("click", function() {
  let numerosEstrelas = gerarNumeros();
  numerosDiv.textContent = "Números: " + numerosEstrelas.numeros.join(", ");
  estrelasDiv.textContent = "Estrelas: " + numerosEstrelas.estrelas.join(", ");
});