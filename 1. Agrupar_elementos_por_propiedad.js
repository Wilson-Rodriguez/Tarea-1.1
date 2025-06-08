const datos = [
    {categoria: 'fruta', nombre: 'manzana'},
    {categoria: 'verdura', nombre: 'zanahoria'},
    {categoria: 'fruta', nombre: 'banana'},
    {categoria: 'verdura', nombre: 'lechuga'}
]

const arrayOrdenado = {}
function agruparPorPropiedad(array, categoria) {
    for (const i in array) {
        if (!(array[i][categoria] in arrayOrdenado)){
            arrayOrdenado[array[i][categoria]] = []
        }
        arrayOrdenado[array[i][categoria]].push(array[i])
    }
    console.log(arrayOrdenado)
}



const resultado = agruparPorPropiedad(datos, 'categoria');


