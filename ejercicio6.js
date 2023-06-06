//Funciones tradicionales
function saludar(nombre){
  return `Bienvenido ${nombre}`
}

function mostrarAmigos(){
  return ['Juan', 'Luis', 'Pedro']
}

/*
let resultado1 = saludar('Ricardo')
console.log(resultado1)     //forma1
console.log(mostrarAmigos())     //forma2
*/

//Objeto
//Función flecha / parámetro
const perfil = {
  'apellidos'    : 'Padilla Bermudo',
  'nombres'      : 'Ricardo Valerio',
  'edad'         :  20,
  'estaCasado'   :  false,
  'amigos'       :  ['Lorenzo', 'Joel', 'Mar'],
  'contacto'     :  {
    'telefono'   :  ['919198582'],
    'ciudad'     : 'Argentina-Buenos Aires',
    'casaPropia' :  true
  },
  'skill'        :  function (){  
    return "Yo se programar"
  }
}

console.log(perfil.skill())