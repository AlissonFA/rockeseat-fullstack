// Template literals (template strings, interpolação de strings)
let username = "Alisson"
let email = "alisson@gmail.com"

// Passar mais de um parâmetro.
console.log(username, email, "teste")

// Concatenar texto.
let message = "Olá, " + username + ". Você conectou com o e-mail " + email

console.log(message)

// Template literals (torna a leitura muito mais fácil)
console.log(`Olá, ${username}. Você conectou com o email ${email}.`)