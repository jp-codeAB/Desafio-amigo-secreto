//Mi Codigo para el Challenge del Amigo Secreto

let amigoSecreto = []; // Array que almacenará los nombres de los amigos ingresados

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigoSecreto').value; // Capturar valor en el momento

    if (amigoIngresado.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigoSecreto.push(amigoIngresado.trim()); // Guardar sin espacios extra
        console.log(amigoSecreto);
        limpiarCaja();
    }
}

// Limpiar la caja cada que se pulse Nuevo juego
function limpiarCaja() {
    document.querySelector('#amigoSecreto').value = '';
}
