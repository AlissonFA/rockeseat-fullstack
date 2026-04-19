const showMessage = () => {
  console.log("Olá")
}

console.log(showMessage)
showMessage()

const showMessage2 = (username, email) => {
  // console.log("Olá,", username, "Seu email é: ", email)
  
  console.log(`Olá, ${username}. Seu email é: ${email}.`)
}

showMessage2("Alisson", "alisson@gmail.com")