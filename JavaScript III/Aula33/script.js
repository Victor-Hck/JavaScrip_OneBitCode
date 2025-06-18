// Seleciona o formulário HTML com o id "orderForm"
const form = document.getElementById("orderForm")

// Adiciona um ouvinte de evento que será executado quando o formulário for enviado
form.addEventListener("submit", function (ev) {
    // Evita que o formulário seja enviado do jeito padrão (recarregando a página)
    ev.preventDefault()

    // Captura o valor do campo de input onde o usuário digita o nome
    const name = document.querySelector("input[name='name']").value

    // Captura o valor do campo de input onde o usuário digita o endereço
    const address = document.querySelector("input[name='address']").value

    // Captura o valor selecionado no menu dropdown do tipo de pão
    const breadType = document.querySelector("select[name='breadType']").value

    // Captura o valor do input de recheio principal
    const main = document.querySelector("input[name='main']").value

    // Captura o valor da área de texto para observações
    const observations = document.querySelector("textarea[name='observations']").value

    // Inicializa a variável 'salad' como uma string vazia para armazenar os itens de salada
    let salad = ""

    // Percorre todos os inputs de salada que estiverem marcados (checked)
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
        // Adiciona cada item selecionado à string 'salad', com um traço e uma quebra de linha
        salad += " - " + item.value + "\n"
    })

  // Mostra no console os dados coletados do formulário
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    })

    // Mostra um alerta com os dados do pedido formatados
    alert(
        `Pedido Realizado!\n
         Nome do cliente: ${name}\n
         Endereço de entrega: ${address}\n
         Tipo de pão: ${breadType}\n
         Recheio:\n
         ${main}\n
         ${salad}\n
         Observações: ${observations}
        `
    )
})