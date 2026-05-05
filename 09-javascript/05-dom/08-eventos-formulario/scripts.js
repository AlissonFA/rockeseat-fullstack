const form = document.querySelector("form")

// A diferença do evento de submit para o button é que ao digitar e dar enter ele também conta.

// Só funciona o último criado.
form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário #1")
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário #2")
}

// Funciona todos.
form.addEventListener("submit", (event) => {
  console.log("Você fez submit no formulário #3")
})

form.addEventListener("submit", (event) => {
  console.log("Você fez submit no formulário #4")
})