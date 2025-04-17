let triplo = 10;

function dobro(x, y) {
    alert(`O dobro de ${x} é ${x * y}`);
}

// dobro(5, 6);

function dizerOla(nome = "Mundo") {
    alert(`Olá ${nome} !`);
}

// dizerOla("Isaac");
// dizerOla();

function soma(a, b, c, d, e) {
    alert(`O resultado da soma é ${a + b + c + d + e}`)
}

// soma(7, 4, 7, 8, 2);

// Sempre lembrar que a ordem importa !

function criarUsuario(nome, email, senha, tipo) {
    const usuario = { 
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo
    }
    console.log(usuario)
}

// criarUsuario("Isaac", "isaac@email.com", "1234"); // Forma correta
// criarUsuario("isaac@gmail.com", "Isaac", "123"); // Forte incorreta

function novoUsuario(nome, tipo = "admin", email, senha) { // sempre que coloca um parametro pre definido precisa declarar ele quando vai chamar a função
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

// novoUsuario("Isaac", "", "isaac@gmail.com", "1234"); // referenciado 
// criarUsuario("Isaac", "isaac@gmail.com", "1234"); // não referenciado

function (nome, email, senha, tipo = "admin") { // as referencias tendem a ficar no final para evitar erros "tipo é a referencia"
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
}

// Quando tiver uma função com muitos parametros transformar ele em um objeto

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) { // forma mais trabalhada de se fazer
    // ...
}

function objetoComoParametro(usuario) {
    // ...
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha"); // forma errada de fazer

const dadosDoUsuario = { // Forma mais clean de fazer transformando em objeto
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosUsuario);