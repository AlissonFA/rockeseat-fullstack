const creditCard = 1234567812344928
// console.log(String(creditCard).length)

// pega os 4 últimos dígitos
const lastDigits = String(creditCard).slice(-4)
// console.log(lastDigits)

// O padStart preenche a string do início
const maskedNumber = lastDigits.padStart(String(creditCard).length, "X")

console.log(maskedNumber)

// O padEnd preenche a string no final
const number = "123"
console.log(number.padEnd(10, "#"))