class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Não precisa colocar function, apenas colocar direto.
  sendEmail() {
    console.log("E-mail enviado para", this.name, "no endereço eletrônico", this.email);
  }
}

// Instanciando a classe
const user = new User("Alisson", "alisson@gmail.com");
user.sendEmail();
