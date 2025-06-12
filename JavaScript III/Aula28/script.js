function show() {
    // Seleciona o elemento com o ID 'contact-list' e armazena na variável 'contactList'
    const contactList = document.getElementById('contact-list');
    console.log(contactList); // Exibe o elemento no console

    // Seleciona todos os elementos <li> da página e armazena em 'listElements'
    const listElements = document.getElementsByTagName('li');
    console.log(listElements); // Exibe a coleção de <li> no console

    // Seleciona todos os elementos com a classe 'contact-input' e armazena em 'contactInputs'
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs); // Exibe a coleção de elementos com essa classe

    // Seleciona todos os elementos com o atributo name="contact1" e armazena em 'contact1'
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1); // Exibe a NodeList dos elementos com esse atributo name

    // Seleciona todos os elementos <label> que são filhos diretos de <li> dentro do elemento com id 'contact-list'
    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts); // Exibe a NodeList com os elementos <label> encontrados

    // Seleciona o primeiro elemento <label> que é filho direto de <li> dentro de '#contact-list'
    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact); // Exibe o primeiro <label> correspondente
}
