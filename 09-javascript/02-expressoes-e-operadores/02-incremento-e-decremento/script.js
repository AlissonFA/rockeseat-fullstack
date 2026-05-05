let number = 10

// Incremento
number = number + 1 // number = 10; 10+1=11
number++ // Adiciona +1

// Incrementa após (por isso não mostra no console)
console.log(number++)
console.log(number)

// Incrementa antes
console.log(++number)

// Decremento
console.log("Decremento após: ", number--) // Retira 1
console.log(number)
console.log("Decremento antes: ", --number)

number += 10 // Adiciona qualquer valor; geralmente utiliza para valores altos que necessitariam de vários number++ ou --
console.log(number)

number = number + 10
console.log(number)
number = number - 10
console.log(number)