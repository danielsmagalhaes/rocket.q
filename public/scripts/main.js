import { Modal } from './modal'

const modal = Modal()

// pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.eventListener('click', event => {
    // abrir modal
    modal.open()
  })
})

// pegar quando o marcar como lido for clicado
