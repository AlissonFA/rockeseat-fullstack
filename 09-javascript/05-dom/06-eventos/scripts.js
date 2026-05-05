// Olha para a janela da página.
window.addEventListener("load", () => {
  console.log("A página foi carregada!")
})

// Quando faz direto olha para a própria estrutura do DOM.
// O nome pode ser qualquer um, geralmente o povo usa apenas "e", mas eu prefiro "event"
addEventListener("click", (event) => {
  event.preventDefault() // Previne o comportamento padrão.

  // Retorna todas as informações do evento.
  // console.log(event)

  // Retorna o elemento clicado.
  // console.log(event.target)
  
  // Retorna o textContent (conteúdo) do elemento clicado.
  console.log(event.target.textContent)
})