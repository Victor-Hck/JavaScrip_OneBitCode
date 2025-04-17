const idade = Number(prompt("Informe a sua idade: "))

if (idade >= 18) {
    console.log("Você é maior de idade")
} else if (idade <= 12) {
    console.log("Você é uma criança")
} else {
    console.log("Você é menor de idade")
}


// Operador Ternário
const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
console.log(resultado)