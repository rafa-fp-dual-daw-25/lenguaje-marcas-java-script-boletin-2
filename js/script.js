// Ejercicio 1
function cambiarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Hola mundo!";
}

// Ejercicio 2
const parrafos = document.querySelectorAll(".texto");

parrafos.forEach(parrafo => {
    parrafo.style.color = "blue";
});

// Ejercicio 3
function eje3() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.textContent = "Elemento modificado";
        item.style.color = "blue";
    });
}

// Ejercicio 4
function eje4() {
    const txt = document.getElementById("mensaje");
    txt.textContent = "Texto modificado con JavaScript";
}

// Ejercicio 5
const cajas = document.querySelectorAll(".caja");

cajas.forEach(caja => {
    caja.style.color = "white";
    caja.style.backgroundColor = "gray";
});

// Ejercicio 6
const contenedor = document.getElementById("eje6");
const parrafo = contenedor.querySelector("p");
parrafo.style.color = "red";

// Ejercicio 7
function eje7() {
    const texto = document.getElementById("texto-eje7");

    texto.textContent = "Botón pulsado";
}

// Ejercicio 8
function botonCambiar() {
    const notas = document.querySelectorAll(".nota");

    notas.forEach(nota => {
        nota.textContent = "Aprobado";
        nota.style.color = "green";
    });
}