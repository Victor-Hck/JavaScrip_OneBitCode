let valor = Number(prompt("Digite um valor para saber sua tabuada: "));

for (let i = 0; i <= 20; i++) {
    let mult = valor * i;
    console.log(`${valor} X ${i} = ${mult}`)
}