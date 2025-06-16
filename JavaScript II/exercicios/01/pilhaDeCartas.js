let array = ["7 Espadas", "5 paus", "4 copas", "1 ouro"];
let menu;

do {
    let tela = "Cartas na mão\n";
    for (let i = 0; i < array.length; i++) {
        tela += `${array[i]}\n`; 
    }

    menu = Number(prompt(`${tela}\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair`));

    if (menu === 1) {
        let topo = prompt("Qual nome da carta: ")
        array.unshift(topo);
    }else if (menu === 2) {
        // if (array.length > 0) {
            let consultado = array.shift();
            alert(`Carta removida: ${consultado}`)
        // }
    }
} while (menu !== 3);

alert("Encerrando programa...")