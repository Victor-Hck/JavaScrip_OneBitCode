let dinheiro = Number(prompt("Quanto de dinheiro: "));
let contador = 0;
let adicionar = 0;
let condicao;

do {
    condicao = prompt(`R$${dinheiro}\nA) Adicionar dinheiro\nB) Remover dinheiro\nC) sair`).toUpperCase();
    if (condicao === "A") {
        adicionar = Number(prompt("Deseja adicionar quanto: "))
        dinheiro += adicionar
    } else if (condicao === "B") {
        remover = Number(prompt("Deseja remover quanto: "));
        dinheiro -= remover
    }
    contador ++;
} while (condicao !== "C");