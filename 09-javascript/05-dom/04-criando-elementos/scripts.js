const guests = document.querySelector("ul") // Seleciona a lista.

const newGuest = document.createElement("li") // Manda criar uma li.
newGuest.classList.add("guest") // Adicionando classe a li
const guestName = document.createElement("span") // Manda criar uma span.

guestName.textContent = "Alisson"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Freitas"

// Adiciona após o último filho.
// newGuest.append(guestName, guestSurname)
// newGuest.append(guestSurname)

// Adiciona antes do primeiro filho.
// newGuest.prepend(guestSurname)

// É mais simples que o append e aceita apenas um argumento.
newGuest.appendChild(guestName)

guests.prepend(newGuest)