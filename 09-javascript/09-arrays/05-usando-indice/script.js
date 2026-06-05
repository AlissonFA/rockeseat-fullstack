let fruits = ["Apple", "Strawberry", "Lemon", "Watermelon"];
// console.log(fruits);

// Encontra e retorna o índice do elemento no Array
let position = fruits.indexOf("Lemon");
console.log(position);

// fruits.splice(1, 3) // A partir de qual | quantos remover

// Remove um item pela posição do índice (1 é o número de itens para remover)
fruits.splice(position, 1)
console.log(fruits)
