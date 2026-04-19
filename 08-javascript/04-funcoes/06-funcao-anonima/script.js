const showMessage = function(){
  return "Olá, Alisson"
}

console.log(showMessage())

const showMessage2 = function(name){
  return "Olá, " + name
}

console.log(showMessage2("Alane"))

const showMessage3 = function(message, name){
  return message + name
}

console.log(showMessage3("Olá, ", "Alan"))