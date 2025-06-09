const lista1 = ['manzana', 'pera', 'banana']
const lista2 = ['pera', 'uva', 'manzana', 'sandia']
const listaCombinada = []
const elementosRepetidos = []
let duplicado = false

function combinarListasSinRepetir(lista1, lista2) {
    for (const i in lista1) {
        for (const j in lista2) {
            if (lista1[i] == lista2[j]) {
                elementosRepetidos.push(lista1[i])
            }
        }
    }

    for (const i in lista1) {
        duplicado = false
        for (const j in elementosRepetidos) {
            if (lista1[i] == elementosRepetidos[j]) {
                duplicado = true
                break
            }
        }
        if (duplicado == false) {
            listaCombinada.push(lista1[i])
        }
    }

    for (const i in lista2) {
        duplicado = false
        for (const j in elementosRepetidos) {
            if (lista2[i] == elementosRepetidos[j]) {
                duplicado = true
                break
            }
        }
        if (duplicado == false) {
            listaCombinada.push(lista2[i])
        }
    }

    for (i in elementosRepetidos) {
        listaCombinada.unshift(elementosRepetidos[i])
    }

    return listaCombinada

    
}
const resultado = combinarListasSinRepetir(lista1, lista2)
console.log(resultado)
