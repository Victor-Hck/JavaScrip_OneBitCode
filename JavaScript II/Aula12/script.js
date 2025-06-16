const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos
// push
let tamanho = arr.push("akadi")
console.log(arr)
console.log(tamanho)

// Adicionar elementos no começo do array
// unshift
tamanho = arr.unshift("Akadi2")
console.log(arr)
console.log(tamanho)

// Remover Elementos no final
// pop
let ultimoElemento = arr.pop();
console.log(arr)
console.log(ultimoElemento) 

// Remover elementos no começo
// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisar pelo index
// index0f
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)
// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Ganfalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(`${elemento} se encontra na posição ${indice}`)
}