// class MyClass {}
class Person {
  // Executa automaticamente sempre que a classe for instanciada
  constructor(name){
    // console.log("Classe instanciada...")
    console.log("Olá", name)
  }
}

// Instanciando a classe
const person = new Person("Alisson")