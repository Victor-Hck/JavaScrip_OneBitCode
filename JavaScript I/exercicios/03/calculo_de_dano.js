const heroi = prompt("Qual seu nome heroi?: ");
const poderDeAtaque = Number(prompt(`Qual o poder de ataque do heroi ${heroi}`));

const vilao = prompt("Qual nome do vilão?: ");
let pontosDeVida = Number(prompt(`Quantos pontos de vida tem o vilão ${vilao}: `));
const poderDefesa = Number(prompt(`Quanto de defesa tem o vilão ${vilao}: `));
const escudo = confirm(`O vilão ${vilao} possui escudo ?: `);

let danoCausado = 0;

if (poderDeAtaque > poderDefesa && escudo === false) {
    danoCausado = poderDeAtaque - poderDefesa;
} else if (poderDeAtaque > poderDefesa && escudo === true) {
    danoCausado = (poderDeAtaque - poderDefesa) / 2;
} 

pontosDeVida -= danoCausado

alert(`${heroi} causou ${danoCausado} pontos de dano em ${vilao}`)
alert(
    `${heroi}\nPoder de ataque: ${poderDeAtaque}\n\n
    ${vilao}\nPontos de vida: ${pontosDeVida}\n
    Poder de defesa: ${poderDefesa}\nPossui escudo: ${escudo}
    `
)