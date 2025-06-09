const edades = [19, 25, 32, 17]
let mayorDeEdad = null

function verificarMayoresDeEdad(edades) {
    for (const edad of edades) {
        mayorDeEdad = true
        if (edad <= 18) {
            mayorDeEdad = false
        }
    }
    return mayorDeEdad
}


const resultado = verificarMayoresDeEdad(edades)
console.log(resultado)
