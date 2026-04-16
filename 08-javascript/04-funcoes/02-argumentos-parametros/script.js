// Passando o parâmetro username.
function message(username){
  console.log("Olá", username)
}

// Passando argumentos.
message("Alisson")
message("Alane")

function sum(a, b){
  console.log(a + b)
}

sum(10, 20)
sum(10, 10)
sum(4, 4)

// Ordem importa.
// Definindo um valor (argumento) padrão.
function joinText(text1, text2 = "", text3 = ""){
  console.log(text1, text2, text3 )
}

joinText("Alisson", "Rodrigo", "Lucas")
joinText("Rodrigo", "Lucas", "Alisson")
joinText("Alisson")