const persona = {nombre: 'Luis', edad: 30}
let copia = {}

function modificarPersona(persona, nombre) {
    copia = {...persona}
    copia['nombre'] = nombre
    copia['edad'] = copia.edad + 1
    return copia
}


const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona);
