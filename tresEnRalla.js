//Declaración de funciones 3 en ralla
let jugador = true;

//Función jugadores
function clicked(id) {
    let newElement = document.createElement("img");
    let seccion = document.getElementById(id);
    newElement.setAttribute("class", "nuevoPunto");

    if (jugador) {
        newElement.setAttribute("src", "close.png");
        seccion.appendChild(newElement);
    }
    else {
        newElement.setAttribute("src", "circle-ring.png");
        seccion.appendChild(newElement);
    }
}

function dobleClicked(id) {
    let seccion = document.getElementById(id);
    let quitar = seccion.querySelector(".nuevoPunto");
    quitar.remove();
}

function cambioJugador2() {
    jugador = false;
}

function cambioJugador1() {
    jugador = true;
}

//Funciones reinicio
function resetPartida() {
    let quitar = document.querySelectorAll(".grid > .nuevoPunto");
    for (let i = 0; i < quitar.length; i++) {
        quitar[i].remove();
    }
}

function resetTotal() {
    let partidas = document.getElementsByClassName("cuenta");
    for (let i = 0; i < partidas.length; i++) {
        partidas[i].textContent = "0";
    }
    resetPartida();
}