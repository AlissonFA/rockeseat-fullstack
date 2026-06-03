let message = "Estou estudando os fundamentos do JavaScript"

// Obtém a posição da palavra
console.log(message.indexOf("estudando"))

// Quando não encontra retorna -1
// console.log(message.indexOf("Estudando"))

// Verifica se existe a palavra na String
console.log(message.includes("JavaScript"))

// Para garantir
console.log(message.toLowerCase().includes("javascript"))