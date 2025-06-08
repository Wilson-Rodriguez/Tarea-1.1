function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuarios = {
                1: 'Juan',
                2: 'Maria'
            }
            resolve({id, nombre: usuarios[id]})
        }, 1000)
    })
}

obtenerUsuario(1).then(usuario1 => {
    obtenerUsuario(2).then(usuario2 => {
        console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`)
    })
})