let menu;
const pi = 3.14;

let resultado;
function areaTriangulo(){
    let base = prompt("Qual o valor da base: ");
    let altura = prompt("Qual o valor da altura: ");

    return (base * altura) / 2
}

function areaRetangulo(){
    let base = parseFloat(prompt("Qual valor da base: ")); 
    let altura = parseFloat(prompt("Qual valor da altura: "));

    return base * altura
}

function areaQuadrada(){
    let quadrado = parseFloat("Qual o valor do quadrado: ");

    return quadrado * quadrado
}

function areTrapezio(){
    baseMaior = parseFloat(prompt("Qual o valor da base maior: "));
    baseMenor = parseFloat(prompt("Qual o valor da base menor: "));
    altura = parseFloat(prompt("Qual o valor da altura: "));

    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(){
    raio = parseFloat(prompt("Qual valor de raio: "));

    return pi * raio
}
do {
    menu = Number(prompt("Calculadora Geométrica\n1)Área do triângulo\n2)Área do retângulo\n3)Área do quadrado\n4)Área do trapézio\n5)Área do círculo\n6)Sair"))
    
    switch(menu) {
            case 1:
                resultado = areaTriangulo();
                alert(`Área do triângulo ${resultado}`);
                
                break;
            case 2:
                resultado = areaRetangulo();
                alert(`A área de retângulo é ${resultado}`);
                break;
            case 3:
                resultado = areaQuadrada();
                alert(`A área do quadrado é ${resultado}`);
                break;
            case 4:
                resultado = areTrapezio();
                alert(`A área do trapezio é: ${resultado}`);
                break;
            case 5:
                resultado = areaCirculo();
                alert(`A área do circulo é ${resultado.toFixed(1)}`);
                break;
            case 6:
                alert("Programa encerrado com sucesso...");
                break;
            default:
                alert("Opção invalida")
        }
} while(menu !== 6)
