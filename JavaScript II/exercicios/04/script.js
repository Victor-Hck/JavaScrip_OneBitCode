let resultado;
let mensagem = "1) Listar vagas disponíveis\n" +
            "2) Criar uma nova vaga\n" +
            "3) Visualizar uma vaga\n" +
            "4) Inscrever um candidato em uma vaga\n" +
            "5) Excluir uma vaga\n" +
            "6) Sair";
const vagas = [];

function listarVagas() {
    if (vagas.length === 0) {
        alert("Nenhuma vaga disponível.");
        return;
    }

    let textoFinal = vagas.reduce((texto, vaga, indice) => {
        texto += `${indice}. ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;
        return texto;
    }, "");

    alert(textoFinal);
}

function criarVaga() {
    const nome = prompt("Digite o nome da vaga:");
    const descricao = prompt("Digite a descrição da vaga:");
    const dataLimite = prompt("Digite a data limite (AAAA-MM-DD):");

    const confirmacao = confirm(
        `Confirme os dados da vaga:\n` +
        `Nome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}\n` +
        `Deseja salvar esta vaga?`
    );

    if (confirmacao) {
        vagas.push({ nome, descricao, dataLimite, candidatos: [] });
        alert("Vaga salva com sucesso!");
    } else {
        alert("Criação da vaga cancelada.");
    }
}

function visualizarVaga() {
    const indice = prompt("Informe o índice da vaga que deseja visualizar:");
    const vaga = vagas[indice];

    if (!vaga) {
        alert("Índice inválido.");
        return;
    }

    const candidatosTexto = vaga.candidatos.join("\n") || "Nenhum candidato inscrito.";
    alert(
        `Vaga ${indice}:\n` +
        `Nome: ${vaga.nome}\n` +
        `Descrição: ${vaga.descricao}\n` +
        `Data Limite: ${vaga.dataLimite}\n` +
        `Quantidade de candidatos: ${vaga.candidatos.length}\n\n` +
        `Candidatos:\n${candidatosTexto}`
    );
}

function inscreverCandidato() {
    const nome = prompt("Informe o nome do candidato:");
    const indice = prompt("Informe o índice da vaga:");
    const vaga = vagas[indice];

    if (!vaga) {
        alert("Índice inválido.");
        return;
    }

    const confirmacao = confirm(
        `Deseja inscrever o candidato ${nome} na vaga ${indice}?\n\n` +
        `Nome da vaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
    );

    if (confirmacao) {
        vaga.candidatos.push(nome);
        alert("Candidato inscrito com sucesso!");
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:");
    const vaga = vagas[indice];

    if (!vaga) {
        alert("Índice inválido.");
        return;
    }

    const confirmacao = confirm(
        `Tem certeza que deseja excluir a vaga ${indice}?\n\n` +
        `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`
    );

    if (confirmacao) {
        vagas.splice(indice, 1);
        alert("Vaga excluída com sucesso.");
    }
}

let menu;
do {
    menu = Number(prompt(mensagem));

    switch (menu) {
        case 1:
            listarVagas();
            break;
        case 2:
            criarVaga();
            break;
        case 3:
            visualizarVaga();
            break;
        case 4:
            inscreverCandidato();
            break;
        case 5:
            excluirVaga();
            break;
        case 6:
            alert("Você está saindo do programa...");
            break;
        default:
            alert("Opção inválida.");
    }
} while (menu !== 6);