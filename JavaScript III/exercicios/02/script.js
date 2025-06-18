// Função auxiliar para criar um elemento <label> com texto e atributo htmlFor
function createLabel(text, htmlFor) {
  const label = document.createElement('label') // Cria o elemento <label>
  label.htmlFor = htmlFor // Define o atributo htmlFor (relaciona com um input)
  label.innerText = text // Define o texto visível da label
  return label // Retorna o elemento label criado
}

// Função auxiliar para criar um elemento <input> com propriedades personalizadas
function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input') // Cria o elemento <input>
  input.id = id // Define o id
  input.value = value // Define o valor (value)
  input.name = name // Define o nome (name)
  input.type = type // Define o tipo (ex: text, radio)
  input.placeholder = placeholder // Define o placeholder (dica no campo)
  return input // Retorna o input criado
}

// Referência ao botão de adicionar tecnologia
const addTechBtn = document.getElementById('addTechBtn')
// Referência ao formulário principal
const form = document.getElementById('devForm')
// Lista para armazenar os desenvolvedores cadastrados
const developers = []
// Contador para controlar o número de linhas de inputs adicionadas
let inputRows = 0

// Evento de clique no botão "Adicionar Tecnologia"
addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs') // Lista onde os inputs serão adicionados

  const newRow = document.createElement('li') // Cria uma nova linha (li)
  const rowIndex = inputRows // Armazena o índice atual
  inputRows++ // Incrementa o índice para a próxima linha
  newRow.id = 'inputRow-' + rowIndex // Define o id da linha
  newRow.className = 'inputRow' // Define a classe da linha

  // Cria label e input para o nome da tecnologia
  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  // Cria o label para o grupo de opções de experiência
  const expLabel = createLabel('Experiência: ')

  // Cria inputs do tipo radio e seus respectivos labels para os níveis de experiência
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)

  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)

  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  // Botão para remover a linha criada
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  // Quando clicado, remove a linha correspondente da lista
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })

  // Adiciona todos os elementos criados à nova linha
  newRow.append(
    techNameLabel, techNameInput, expLabel,
    expRadio1, expLabel1,
    expRadio2, expLabel2,
    expRadio3, expLabel3,
    removeRowBtn
  )

  // Adiciona a linha à lista de inputs
  stackInputs.appendChild(newRow)
})

// Evento de envio do formulário
form.addEventListener('submit', function (ev) {
  ev.preventDefault() // Impede o envio padrão do formulário

  const fullnameInput = document.getElementById('fullname') // Pega o input do nome completo
  const inputRows = document.querySelectorAll('.inputRow') // Seleciona todas as linhas de inputs

  let technologies = [] // Lista temporária para armazenar tecnologias

    // Percorre cada linha e extrai os dados
    inputRows.forEach(function (row) {
    // Pega o nome da tecnologia
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    // Pega a experiência selecionada (radio marcado)
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    // Adiciona um objeto com nome e experiência à lista
    technologies.push({ name: techName, exp: techExp })
  })

  // Cria um novo desenvolvedor com nome e tecnologias
  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  // Adiciona à lista de desenvolvedores
  developers.push(newDev)

  // Exibe uma mensagem de sucesso
  alert('Dev cadastrado com sucesso!')

  // Limpa o campo de nome e remove todas as linhas de inputs
  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  // Exibe a lista de desenvolvedores no console (para depuração)
  console.log(developers)
})
