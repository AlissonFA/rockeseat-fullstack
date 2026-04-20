// Acessa o elemento pelo selector ID.
const guest = document.querySelector("#guest-2") // Parecido com getElementByID, class, tag.
console.log(guest)

// Acessa o elemento pelo selector class.
// Retorna sempre o primeiro elemento
// const guests = document.querySelector(".guest")

// Retorna todos os elementos encontrados pela query
const guests = document.querySelectorAll(".guest")
console.log(guests)