let menu;
const pi = 3.14;

do {
    menu = Number(prompt("Calculadora Geométrica\n1)Área do triângulo\n2)Área do retângulo\n3)Área do quadrado\n4)Área do trapézio\n5)Área do círculo\n6)Sair"))
    
    switch(menu) {
            case 1:
                base = parseFloat(prompt("Qual valor da base: "));
                altura = parseFloat(prompt("Qual o valor da altura: "));

                
                break;
            case 2:
                base = parseFloat(prompt("Qual valor da base: "));

                altura = parseFloat(prompt("Qual valor altura: "));

                function areaRetangulo(base, altura){
                    return base * altura
                }
                alert(`A área de retângulo é ${areaRetangulo(base, altura)}`);
                break;
            case 3:
                quadrado = parseFloat(prompt("Qual o valor do quadrado: "));

                function areaQuadrado(quadrado){
                    return quadrado * quadrado
                }
                alert(`A área do quadrado é ${areaCirculo(quadrado, quadrado)}`)
                break;
            case 4:
                baseMaior = parseFloat(prompt("Qual o valor da base maior: "));

                baseMenor = parseFloat(prompt("Qual o valor da base menor: "));

                altura = parseFloat(prompt("Qual o valor da altura: "));

                function areaTrapezio(baseMaior, baseMenor, altura){
                    return (baseMaior + baseMenor) * altura / 2
                }
                alert(`A área do trapezio é: ${areaTrapezio(baseMaior, baseMenor, altura)}`)
                break;
            case 5:
                raio = parseFloat(prompt("Qual valor de raio: "))
                function areaCirculo(pi, raio){
                    return pi * raio
                }
                alert(`A área do circulo é ${areaCirculo(pi, raio).toFixed(1)}`);
                break;
            case 6:
                alert("Programa encerrado com sucesso...");
                break;
            default:
                alert("Opção invalida")
        }
} while(menu !== 6)