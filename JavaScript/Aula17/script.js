function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media //Sem esse comando de return nosso console.log vai devolver undefined
}

const resultado = calcularMedia(7, 2);
// console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook Intel Core i3 8gb", 2500);
// console.log(notebook)

// console.log(criarProduto("Notebook Intel Core i3 8gb", 2500));

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))

function ola() {
    let texto = "...";
    return texto
    texto = "Olá, mundo" // uma função so retorna uma unica vez, no momento em que der return a função acaba
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(17))