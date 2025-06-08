const notas = [
    {valor: 90, peso: 0.5},
    {valor: 80, peso: 0.3},
    {valor: 70, peso: 0.2}
];

let notaTotal = 0
function promedioPonderado(notas) {
    for (const i of notas) {
        notaTotal += i.valor * i.peso
    }
    return notaTotal
}


const resultado = promedioPonderado(notas)
console.log(resultado)
