const nome1 = prompt("Nome do veículo: ")
const velocidade1 = Number(prompt("Velocidade do veículo: "))

const nome2 = prompt("Nome do veículo: ")
const velocidade2 = Number(prompt("Velocidade do veículo: "))

if (velocidade1 > velocidade2) {
    alert(`O veículo ${nome1} é mais rapido do que o ${nome2}`)
} else if (velocidade2 > velocidade1) {
    alert(`O veículo ${nome2} é mais rapido do que o ${nome1}`)
} else {
    alert(`Os veículos ${nome1} e ${nome2} possuem a mesma velocidade`)
}