/*
try {
  // Tenta executar algo
  console.log(result)
} catch (error) {
  // Captura o erro para tratar
  
  // console.log(error)

  console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!")
} finally { // Executa independente se deu certo ou errado; Opcional
  console.log("Fim")
}
*/

let result = 0

try {
  if (result === 0) {
    throw new Error("O valor é igual a zero.")
  }
} catch (error) {
  console.log(error)
} finally {
  console.log("Fim")
}