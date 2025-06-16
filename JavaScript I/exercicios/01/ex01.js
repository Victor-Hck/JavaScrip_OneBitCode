let primeiroNome = prompt("Digite seu nome: ") 
let sobreNome = prompt("Digite seu sobre nome: ")
let campoEstudo = prompt("Digite seu campo de estudos: ")
let anoNasci = Number(prompt("Digite sua data de nascimento: "))

const idade = 2025 - anoNasci

let resultado = alert(`Nome Completo: ${primeiroNome + "" + sobreNome}\nCampo Estudo: ${campoEstudo}\nIdade: ${idade}`)

