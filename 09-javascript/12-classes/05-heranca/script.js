class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal {
  // Não tem nada aqui
}

const dog = new Dog("Bilu");
console.log(dog.name)
dog.makeNoise();

class Cat extends Animal {
  // Não tem nada aqui
}

const cat = new Cat("Mel");
console.log(cat.name)
dog.makeNoise();
