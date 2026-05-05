// Conversão de tipos (explicitamente)
console.log(typeof Number("9"))

// Variável
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))

// Convertendo para string (texto)
let age = 18
console.log(typeof age.toString())
console.log(typeof String(age))

let option = 1 // 0 ele considera falso e 1 positivo
console.log(Boolean(option))
console.log(typeof Boolean(option))

// Coerção de tipos (automático)
console.log("10" + 5)