// Objeto vazio
const obj = {};
console.log(obj);
console.log(typeof obj);

// Objeto com propriedades e métodos
const person = {
  email: "alisson@gmail.com", // Chave e valor
  age: 18,
  // Aninhamento
  name: {
    first_name: "Alisson",
    surname: "Freitas",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "Aracaju",
  },
  message: () => {
    console.log("Oi Alisson");
  },
};

// Acessando propriedades e métodos usando a notação de ponto
console.log(person.email);

console.log(person.name.first_name);

// Executa o método do objeto
person.message()

// Notação de colchetes
console.log(person["email"]);
console.log(person["name"]["first_name"]);
person["message"]()