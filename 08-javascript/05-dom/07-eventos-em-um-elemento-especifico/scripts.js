const ul = document.querySelector("ul") // Selecionando

// Adicionando "gravação" do evento.
ul.addEventListener("scroll", () => {
  // console.log(ul.scrollTop)

  if (ul.scrollTop > 300) {
    // console.log("FIM DA LISTA")

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
})

const button = document.querySelector("button") // Selecionando.

// Adicionando "gravação" do evento.
button.addEventListener("click", () => {
  event.preventDefault() // Remove comportamento padrão.
  console.log("Clicou")
})