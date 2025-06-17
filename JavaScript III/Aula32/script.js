// Função chamada quando o botão de registro é clicado
function register(ev) {
    console.log(ev); // Mostra no console o evento de clique

    // Obtém o elemento pai (a seção onde estão os campos de entrada)
    const sectionElement = ev.currentTarget.parentNode;

    // Acessa os valores dos campos de entrada dentro da seção
    const username = sectionElement.children.username.value; // Nome do usuário
    const password = sectionElement.children.password.value; // Senha digitada
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value; // Confirmação da senha

    // Verifica se a senha e a confirmação são iguais
    if (password === passwordConfirmation) {
        alert(`Usuario ${username} registrado!`); // Senhas batem - registra o usuário
    }else {
        alert("As senhas não conferem!"); // Senhas diferentes - mostra erro
    }
}

// Pega o botão com ID "register-button" no HTML
const button = document.getElementById("register-button");

// Adiciona o evento de clique ao botão para chamar a função register
button.addEventListener('click', register);

// Função para remover o ouvinte de evento de clique do botão
function removeListenet() {
    button.removeEventListener('click', register); // Remove o evento de clique
    alert("Event removed!"); // Informa que o evento foi removido 
}

// Adiciona um evento de mouseover (passar o mouse) no botão
button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget) // Mostra no console o elemento do botão
});