let date = new Date("2026-06-02T14:30:00")

// Exibe a data no formato local.
console.log(date.toLocaleDateString())

// Exibe a hora no formato local.
console.log(date.toLocaleTimeString())

// Exibe a data no formato escolhido.
console.log(date.toLocaleDateString("en")) // Pode passar o formato dentro do método.

// Exibe a hora no formato escolhido.
console.log(date.toLocaleTimeString("en"))