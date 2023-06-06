//setTimeout() nos permitirá dilatar/extender los tiempos de carga
let p1 = new Promise( (resolve, reject) => {
  setTimeout(resolve, 1000, "Hola mundito pequeño")
});

let p2 = new Promise( (resolve, reject) => {
  setTimeout(resolve, 500, "Hola mundito mediano")
});

let p3 = new Promise( (resolve, reject) => {
  setTimeout(resolve, 400, "Hola mundito grande")
});

//PRUEBA 3
//Ejecutar ambas promesas
Promise.all([p1,p2,p3]).then((respuestas) => {
  console.log(respuestas);
  console.log("Proceso concluido")
});


//PRUEBA 2
//Ejectura la p2, después de p1
/*p1.then((res1) => {
  console.log(res1)
  p2.then((res2) => {
    console.log(res2)
    console.log("Proceso concluido")
  })
});
*/


//PRUEBA 1
//Ejecutando promesas en paralelo
//La que tiene menor tiempo en ms se ejecutará primero
/*p1.then((res) => {
  console.log(res)
});

p2.then((res) => {
  console.log(res)
});
*/