let one = 1
let two = 2

// == igual a (comparação)
console.log("------------IGUAL A------------")
console.log(one == two)
console.log(one == 1)
console.log(one == "1") // Ele olha para o conteúdo e não o tipo, então isso vai dar verdadeiro mesmo sem ser uma string.

// != diferente de
console.log("------------DIFERENTE DE------------")
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// estritamente igual a (tipo e valor)
console.log("------------ESTRITAMENTE IGUAL A------------")
console.log(one === 1)
console.log(one === "1")

// estritamente diferente de (tipo e valor)
console.log("------------ESTRITAMENTE DIFERENTE DE---------")
console.log(one !== two)
console.log(one !== 1)
console.log(one !== "1")