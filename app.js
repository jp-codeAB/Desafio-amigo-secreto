//Mi Codigo para el Challenge del Amigo Secreto

let amigoSecreto = []; // Array que almacenará los nombres de los amigos ingresados

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigoSecreto').value; // Capturar valor en el momento

    if (amigoIngresado.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigoSecreto.push(amigoIngresado.trim()); // Guardar sin espacios extra
        limpiarCaja();
        mostrarAmigos();
    }
    
}



// Limpiar la caja cada que se pulse añadir
function limpiarCaja() {
    document.querySelector('#amigoSecreto').value = '';
}

// Mostrar la lista de amigos en pantalla
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar contenido anterior 
    listaAmigos.innerHTML = "";

    // Recorrer el array y crear <li> por cada amigo
    for (let i = 0; i < amigoSecreto.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigoSecreto[i];
        listaAmigos.appendChild(li);
    }
}

