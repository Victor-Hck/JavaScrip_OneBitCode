const contador = 0;
let menu;
let imoveis = [];

do {
    menu = Number(prompt("Cadastrar imoveis 1)\n2)\n3) Sair"));
    switch (menu) {
        case "1":

            let imovel = {};

            const nome = prompt("Qual seu nome: ");
            const quartos = Number(prompt("Quantos quartos: "));
            const banheiros = Number(prompt("Quantos banheiros: "));
            const garagem = prompt("Possui garagem: (S/N)");

            imovel.name = nome;
            imovel.quartos = quartos;
            imovel.banheiros = banheiros;
            imovel.garagem = garagem;

            imoveis.push(imovel);
            imoveisCadastrados++;
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(`Mostrar Imoveis Cadastrador\nnome: ${imoveis[i].name}\nQuartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i].banheiros}\nBanheiros: ${imoveis[i].banheiros}\nGaragem: ${imoveis[i].garagem}`)
            }
            break;
        case "3":
            alert("Programa encerrado com sucesso...")
            break;
        default:
            alert("Opção invalida...")
            break;
    }
} while (menu !== 3); 