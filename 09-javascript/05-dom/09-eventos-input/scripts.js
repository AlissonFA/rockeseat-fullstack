const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo)
/* input.addEventListener("keydown", (event) => {
  console.log(event.key) // .key para capturar apenas as letras (opcional)
}) */

// keypress - quando uma tecla do tipo caracte é pressionada (ignora ctrl, shift, etc...)
input.addEventListener("keypress", (event) => {
  console.log(event.key)
})

// onchange só é disparado quando sai do input.
/* input.onchange = () => {
  console.log("O INPUT MUDOU")
} */

  input.onchange = () => {
    inputChange()
  }
function inputChange(){
  console.log("O INPUT MUDOU!")
}
