function execute(taskName, callback){
  console.log(`Executando a tarefa: ${taskName}`)

  callback()
}

function callback(){
  console.log("Tarefa finalizada.")
}

// Passando para a função.
execute("Download do arquivo...", callback)

console.log("--------------------------")

// Criando a função no próprio parâmetro (função anônima).
execute("Upload do arquivo...", function(){
  console.log("Função de callback com uma função anônima.")
})

console.log("--------------------------")

// Utilizando Arrow Function
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluído!")
})

console.log("--------------------------")

// Forma menor (encurtada)
execute("Salvando arquivos...", () => console.log("Arquivo salvo")) // Quando for executar somente uma linha