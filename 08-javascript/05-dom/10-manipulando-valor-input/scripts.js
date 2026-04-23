const input = document.querySelector("input")
const form = document.querySelector("form")

/* input.addEventListener("input", () => {
  // console.log(input.value)
  const value = input.value

  const regex = /\D+/g

  // Retorna o padrão encontrado na string.
  // console.log(value.match(regex))

  // Testa se atende o padrão.
  // const isValid = regex.test(value)
  // console.log(isValid)
}) */

form.addEventListener("submit", (event) => {
  event.preventDefault() // Para impedir o padrão
  const value = input.value

  const regex = /\D+/g

  if (regex.test(value)) {
    console.log(value)
  } else {
    alert("Valor inválido. Digite corretamente!")
  }
  /* const value = input.value.replace(regex, "") // Estamos substituindo o valor do regex por "" (nada).
  console.log(value) */
})