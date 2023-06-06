//Función basada en promesas
let request = require('request') //Acceder URL remotas

//Esta función retorna una promesa... then() catch() finally()
//La clase Promise requiere de un executor(resolver, rechazada)
//callback => función que retorna un valor
function loadPage(url){
  return new Promise(function(resolve, reject){
    request (url, function(error, response){
      if (error) return reject(error)
      resolve(response)
    })
  })
}

let promesa = loadPage('https://www.google.com');

//Nos devulve => Promise { <pending> }
//console.log(promesa)

promesa.then(function(){
  console.log("URL Cargada con éxito")
}).catch(function(){
  console.log("Problemas al cargar la URL")
})
