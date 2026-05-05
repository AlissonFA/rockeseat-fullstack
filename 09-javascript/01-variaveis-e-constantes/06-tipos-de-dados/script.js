// JavaScript é dinâmico, o tipo da variável é definida dinamicamente pelo tipo do valor (não é necessário declarar o tipo).

// Tipos Primitivos (disponíveis na própria linguagem)
// String (texto)
let username = "Alisson"
console.log(username)
console.log(typeof username) // typeof mostra o tipo

console.log("Uma string com aspas")
console.log('Uma string com apóstrofo (aspas simples)')

// Quanto utilizar uma ou outra (aspas)?
console.log('Uma string com "aspas duplas" dentro de simples.')

console.log("Uma string com 'aspas simples' dentro de duplas.")

console.log(`
  Uma string com acento grave permite escrever múltiplas linhas.
`)

// Number (valor)
console.log(typeof 5)

// Inteiro positivo
console.log(5)

// Inteiro negativo
console.log(-5)

// Números reais ou float
console.log(7.5) // Tem que ser . porque se for , ele acha que são diferentes

// NaN - Not a Number
console.log(12.5 / "alisson")

// Boolean (verdadeiro ou falso)
console.log(true)
console.log(false)

let isLoading = true
console.log(typeof isLoading)

// Null (conteúdo vazio)
let empty = null // intencional
console.log("O valor é: ", empty)

// Undefined (JS atribui automaticamente para uma variável que não valor)
let emptiness
console.log("O valor é: ", emptiness)