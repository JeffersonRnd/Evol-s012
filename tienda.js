// tienda.js - VERSION 1
// Muestra una lista simple de productos

const productos = [
    { id: 1, nombre: "Laptop", precio: 2500 },
    { id: 2, nombre: "Mouse", precio: 45 },
    { id: 3, nombre: "Teclado", precio: 120 },
    { id: 4, nombre: "Monitor", precio: 800 },
    { id: 5, nombre: "Audifonos", precio: 150 }
];

function mostrarProductos() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    productos.forEach(function (p) {
        const li = document.createElement("li");
        li.textContent = p.nombre + " - S/ " + p.precio;
        lista.appendChild(li);
    });
}

mostrarProductos();
console.log("Version 1 cargada desde rama2");
