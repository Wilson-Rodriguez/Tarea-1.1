const elementos = [
    {id: 1, nombre: 'A'},
    {id: 2, nombre: 'B'},
    {id: 1, nombre: 'A'}
]

let valoresUnicos = []

function eliminarDuplicados(elementos, id) {
    for (const i in elementos) {
        if (!(elementos[i][id] in valoresUnicos)) {
            valoresUnicos.push(elementos[i][id])
        }
        else {
            elementos.splice(i, 1)
        }
    }
}


const resultado = eliminarDuplicados(elementos, 'id');
console.log(elementos)
