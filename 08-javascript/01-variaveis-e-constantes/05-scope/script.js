// Escopo var

// console.log(user)
// var user = "Alisson"

// Hoisting
// var user
// console.log(user)

// Escopo global.
var email = "joao@gmail.com"

{
  // Escopo de bloco.
  console.log(email)
}

{
  var age = 18
}

console.log(age)

// Escopo let

// {
//   Isso aqui vai dar erro, porque o let não permite usar algo não declarado
//   console.log(adress)
//   let adress = "Rua X"
// }

// {
//   Isso aqui vai dar erro, porque o let não permite usar algo de escopo diferente
//   let city = "Aracaju"
// }

// console.log(city)