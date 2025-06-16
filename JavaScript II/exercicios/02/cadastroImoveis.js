let contador = 0;
let menu;
const imoveis = [];

do {
    menu = Number(prompt(`MENU INTERATIVO\nImoveis cadastrados: ${imoveis.length}\n1) Salvar imoveis\n2) Mostrar imoveis\n3) Sair`));

    if (menu === 1) {

        let imovel = {};

        const nome = prompt("Qual seu nome: ");
        const quartos = Number(prompt("Quantos quartos: "));
        const banheiros = Number(prompt("Quantos banheiros: "));
        const garagem = prompt("Possui goragem: (S/N)");

        imovel.name = nome;
        imovel.quartos = quartos;
        imovel.banheiros = banheiros;
        imovel.garagem = garagem;

        imoveis.push(imovel);

    }else if (menu === 2) {
        for (let i = 0; i < imoveis.length; i++) {
            alert(`Mostrar Imoveis Cadastrador\nnome: ${imoveis[i].name}\nQuartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i].banheiros}\nBanheiros: ${imoveis[i].banheiros}\nGaragem: ${imoveis[i].garagem}`)
        }
    }
} while (menu !== 3);

alert("Fim do cadastramento de imoveis...")