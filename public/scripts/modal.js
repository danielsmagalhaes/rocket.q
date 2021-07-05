module.exports = function Modal() {
  function open() {
    // funcionalidade de atribuir a classe active da modal
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    // funcionalidade de remover a classe active da modal
  }

  return {
    open,
    close
  }
}
