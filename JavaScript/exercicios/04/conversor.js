const metros = Number(prompt("Digite um valor em metros: "));
const medidas = prompt("A) Milímetro \nB) Centímetro \nC) Decímetro \nD) Decâmetro \nE) Hectômetro \nF) Quilômetro").toUpperCase();
// let nomeMaiusculo = medidas.toUpperCase();

switch (medidas) {
    case "A":
        const milimetro = metros * 1000
        alert(`Os ${metros}mt foram convertidos para ${milimetro}mm`)
        break;
    case "B":
        const centimetro = metros * 100
        alert(`Os ${metros}mt foram convertidos para ${centimetro}cm`)
        break;
    case "C":
        const decimetro = metros * 10
        alert(`Os ${metros}mt foram convertidos para  ${decimetro}dm`)
        break;
    case "D":
        const decametro = metros / 10
        alert(`Os ${metros}mt foram convertidos para ${decametro}dam`)
        break;
    case "E":
        const hectometro = metros / 100
        alert(`Os ${metros}mt foram convertidos para ${hectometro}hm`)
        break;
    case "F":
        const quilometro = metros / 1000
        alert(`Os ${metros}mt foram convertidos para ${quilometro}km`)
        break;
    default:
        alert("Opção invalida tente novamente...")
        break;
}