let array = ["Akadi", "Drakky", "João"];
let menu;

do {
    let lista = "Fila de espera:\n";
    for (let i = 0; i < array.length; i++) {
        lista += `${i + 1}º ${array[i]}\n`;
    }

    menu = Number(prompt(`${lista}\nEscolha uma opção:\n1. Novo paciente\n2. Consultor paciente\n3. Sair`));

    if (menu === 1) {
        let paciente = prompt("Qual o nome do novo paciente: ")
        array.push(paciente);
    }else if (menu === 2) {
        if (array.length > 0) {
            let consultado = array.shift();
            alert(`Paciente consultado: ${consultado}`)
        }else {
            alert("Não há pacientes na fila!")
        }
    }else if (menu !== 3) {
        alert("Opção inválida. Tente novamente.")
    }
} while (menu !== 3);

alert("Encerrando o programa...")