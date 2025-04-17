const arr = [
    [
        "1 nivel",
        "2 nivel",
        "3 nivel"
    ],[
        "1 nivel",
        "2 nivel",
        "3 nivel"
    ],[
        "1 nivel",
        "2 nivel",
        "3 nivel"
    ],[
        [
        ["teste supremo"]
        ]
    ]
]
// arrays bidimensionais se comportam como matrizes
console.log(arr)
console.log(arr[0, 0])
console.log(arr[0][2])
console.log(arr[1][1])
console.log(arr[3][0][0])

const matriz = [
    ["teste1"],
    ["teste2"],
    ["teste3"]
]
// console.log(matriz[0][0])
// Console table tenta exibir o valor da variavel
// Em uma tabela
// console.table(matriz)

// matriz.push(["Nova linha"])
// matriz[0].push("Nova coluna")

// console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j <matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log(`Posição ( ${i}, ${j} Valor: ${elemento})`)
    }
}