// Parte 1-Cadastro
alert("Bem vindo ao site!");
let nome = prompt("Qual seu nome?");
let idade = parseInt(prompt("Qual sua idade?"));

// Lista de convidados
let convidados = [];

// Validação com Condição
if (idade <= 17) {
  alert("Voce deve esperar completar 18 anos");
} else {
  convidados.push(nome);
}
// Repetição
let resposta = prompt("Mais alguma conta?")
  .toLowerCase()
  .trim()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
while (resposta == "sim") {
  nome = prompt("Qual seu nome?");
  idade = parseInt(prompt("Qual sua idade?"));
  if (idade <= 17) {
    alert("Espere ser de maior!");
  } else {
    convidados.push(nome);
  }
  resposta = prompt("Mais alguma conta?")
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
function contarConvidados(convidados) {
  return convidados.length;
}
convidados.sort();
alert(`convidados finais: ${convidados.join(", ")} = ${contarConvidados(convidados)}!`);
