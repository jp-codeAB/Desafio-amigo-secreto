//Mi Codigo para el Challenge del Amigo Secreto

let amigoSecreto = []; // Array que almacenará los amigos ingresados

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigoSecreto').value; // Capturar valor 

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
    listaAmigos.innerHTML = "";// Limpiar contenido anterior 

    // Recorrer el array y crear <li> por cada amigo
    for (let i = 0; i < amigoSecreto.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigoSecreto[i];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigoSecreto.length === 0) {
        alert("No existen amigos ingresados!\nIngresa a tus amigos.")
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigoSecreto[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar contenido anterior

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🦾`;
    resultado.appendChild(li);
}
