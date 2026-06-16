class User {
  // Construtor não vai funcionar porque não estamos instanciando a classe

  // Métodos estáticos podem ser acessados sem necessidade de instanciar a classe
  static showMessage(message) {
    console.log(message);
  }
}

// Instanciando a classe
// const user = new User();
// user.showMessage();

User.showMessage("Essa é uma mensagem");
