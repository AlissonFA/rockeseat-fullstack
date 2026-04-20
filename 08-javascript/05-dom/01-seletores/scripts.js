// Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da página.
// console.log(document.title)

// Acessar o elemento pelo ID (SELETOR ID).
const guest = document.getElementById("guest-2")
console.log(guest)

// Visualizar propriedades do objeto.
console.dir(guest)

// Acessar elemento com classe (SELETOR class).
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir apenas a primeira classe da lista.
console.log(guestsByClass.item(0))
console.log(guestsByClass[0])

// Selecionar lista de elementos pela tag.
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)