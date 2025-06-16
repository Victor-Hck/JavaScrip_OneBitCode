let nome = prompt("Digite um nome: ");
let teste = "";

for (let i = nome.length-1; i >= 0 ; i--) { 
    teste += nome[i]
}

if (nome == teste) {
    alert("Agora é")
} else if (nome != teste) {
    alert(`Não é ${nome} palavra de tras pra frente ${teste}`)
}