// Atendimento: Digite 1 para consultar pedido, 2 para feedback, 3 cancelar

let option = 1

switch (option) {
  case 1:
    console.log("Consultar pedido")
    break // Sem isso ele executa tudo que vem depois
  case 2:
    console.log("Falar com atendente")
    break
  case 3:
    console.log("Cancelar pedido")
  default: // É tipo o else do if
    console.log("Opção inválida")
}