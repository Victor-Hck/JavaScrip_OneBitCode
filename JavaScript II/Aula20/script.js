// Métodos são funções atreladas a objetos.
let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() {
        console.log("Olá, Mundo!");
        console.log("Olá, Akadi!");
    },
    salve() {
        console.log("Olá, Mundo!");
        console.log(`Olá, mundo! Meu nome é ${this.nome}`);
    }
}
// this.valor mostrá o valor do objeto.
console.log(pessoa);
pessoa.dizerOla();
pessoa.salve();
console.log(pessoa);