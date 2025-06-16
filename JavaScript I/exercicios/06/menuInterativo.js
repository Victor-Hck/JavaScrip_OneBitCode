let menu;
let contador = 0;

do {
    menu = prompt("MENU INTERATIVO\n\nA)\nB)\nC)\nD)\nE)").toUpperCase();
    contador ++;

    switch (menu) {
        case "A":
            alert("pegadinha0")
            break;
        case "B":
            alert("pegadinha1")
            break;
        case "C":
            alert("pegadinha2")
            break;
        case "D":
            alert("pegadinha3")
            break;
        case "E":
            alert("Encerrando menu...")
            break;
        default:
            alert("Opção invalida...")
            break;
    }
} while (menu !== "E");