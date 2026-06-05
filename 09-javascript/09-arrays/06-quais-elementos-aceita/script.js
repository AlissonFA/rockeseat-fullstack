let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro do Array!");
  },
  {
    name: "Alisson",
    idade: 18,
  },
];

// Texto
console.log(myArray[0])

// Número
console.log(myArray[1])

// Boolean
console.log(myArray[2])

// Função
// Recuperando e executando
myArray[3]()

// Objeto
console.log(myArray[4].name, myArray[4].idade)