import Modal from './modal.js'

const modal = Modal()

const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', handleClick)
})

// pegar todos os botões que existe com a classe delete
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'marcar como lida' : 'excluir'

  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  // mudar titulo
  modalTittle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta'
  modalDescription.innerHTML = `Tem certeza que você deseja ${text} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // abrir modal
  modal.open()
}
