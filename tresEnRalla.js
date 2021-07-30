//Declaración de funciones 3 en ralla

//Función jugadores
let newElement = document.createElement("img");
let posiciones = document.querySelectorAll(".grid div");

function jugador1() {
    newElement.setAttribute("src", "close.png");
    for (let i = 0; i < posiciones.length; i++) {
        posiciones[i].addEventListener("click", posiciones[i].appendChild(newElement));
    }
}

// function jugador2() {
//     let sección = document.getElementById();
//     sección.appendChild(newElement);
//     newElement.setAttribute("class", "nuevoPunto");
//     newElement.setAttribute("src", "circle-ring.png");
//     newElement.setAttribute("ondlbclick", "quitarImagen()")
// }

// function quitarImagen() {
//     let eliminar = document.getElementById();
//     eliminar.remove();
// }

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