function cargarDatos() {
    return new Promise( (resolve) => {
        setTimeout(function() {
            resolve("Datos cargados correctamente");
        }, 2000);
    });
}

cargarDatos().then( (mensaje) => {
    console.log(mensaje)
});
