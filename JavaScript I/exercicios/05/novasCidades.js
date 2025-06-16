const turista = prompt("Digite o nome do turista: ");
const visitouCidade = prompt("Já visitou alguma cidade? (S/N)").toUpperCase();

let cidades = "";
let contador = 0;

if (visitouCidade === "S") {
    let cidade = prompt("Qual nome da cidade?: ")
    cidades += cidade
    contador++;

    let novaCidade = prompt("Já visitou outra cidade?: (S/N)").toUpperCase();

    while (novaCidade === "S") {
        cidade = prompt("Qual nome das outras cidades?: ")
        cidades += ", " + cidade;
        contador++;
        novaCidade = prompt("Já visitou outra cidade? (S/N)").toUpperCase();
    }
}

alert(`${turista} visitou ${contador} cidades.\nCidades visitadas: ${cidades}`);