alert("Bem-vindo! A seguir")
let nome = prompt("Qual seu nome?: ")
let idade = Number(prompt("Qual sua idade"))
let confirmacao = confirm(nome + " Sua idade " + idade + " está correta ?")
let exibir = alert(`Nome: ${nome}\n Idade: ${idade}\n Confirmação: ${confirmacao}`)