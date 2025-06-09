const palabras = ['hola', 'adios', 'hola', 'gracias', 'hola', 'gracias']
const contador = {}

function contarPalabras(palabras) {
      

  for (const palabra of palabras) {
    if (contador[palabra]) {
      contador[palabra] += 1
    } else {
      contador[palabra] = 1 
    }
  }
  return contador
}



const resultado = contarPalabras(palabras)
console.log(resultado)
