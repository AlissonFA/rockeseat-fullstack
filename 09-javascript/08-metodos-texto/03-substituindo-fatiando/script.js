let message = "Estou estudando os fundamentos do JavaScript.";

// Substituindo parte de um texto
console.log(message.replace("JavaScript", "HTML")); // Tem dois parâmetros: 1. O que quer substituir, 2. O que quer colocar no lugar

// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 30))

// Extraindo uma parte da string de trás para frente
console.log(message.slice(-11))

let textWithSpace = "               Texto de Exemplo               "
console.log(textWithSpace.length)

// Remove espaços em branco no início e no final da string
console.log(textWithSpace.trim().length)