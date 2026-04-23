const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()

  const value = input.value // pega o valor
  const HasNumberRegex = /\d+/g

  if(HasNumberRegex.test(value)){
    alert("O texto contém número. Por favor, digite corretamente.")
  } else {
    alert("Enviado!")
  }
}