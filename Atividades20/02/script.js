let nomeVelha = prompt("Digite seu Nome: ");
let idadeVelha = Number(prompt("Digite sua idade: "));

let nomeNova = prompt("Digite seu nome: ");
let idadeNova = Number(prompt("Digite sua idade: "));

const calcIdade = idadeVelha - idadeNova;

let exibVelha = alert(`Nome Velha: ${nomeVelha}\n Idade Velha: ${idadeVelha}\n Nome Nova: ${nomeNova}\n Idade Nova: ${idadeNova}\n Diferença Idade: ${calcIdade}`);
