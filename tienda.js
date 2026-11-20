// tienda.js - VERSION 2
// Lista de productos + carrito de compras con total

const productos = [
    { id: 1, nombre: "Laptop", precio: 2500 },
    { id: 2, nombre: "Mouse", precio: 45 },
    { id: 3, nombre: "Teclado", precio: 120 },
    { id: 4, nombre: "Monitor", precio: 800 },
    { id: 5, nombre: "Audifonos", precio: 150 },
    { id: 6, nombre: "Webcam", precio: 180 },
    { id: 7, nombre: "Impresora", precio: 650 }
];

let carrito = [];

function mostrarProductos() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    productos.forEach(function (p) {
        const li = document.createElement("li");
        li.innerHTML = "<span>" + p.nombre + " - S/ " + p.precio + "</span>";

        const boton = document.createElement("button");
        boton.textContent = "Agregar";
        boton.onclick = function () {
            agregarAlCarrito(p.id);
        };

        li.appendChild(boton);
        lista.appendChild(li);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(function (p) {
        return p.id === id;
    });
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const ul = document.getElementById("carrito");
    ul.innerHTML = "";

    carrito.forEach(function (p) {
        const li = document.createElement("li");
        li.textContent = p.nombre + " - S/ " + p.precio;
        ul.appendChild(li);
    });

    document.getElementById("total").textContent = calcularTotal();
}

function calcularTotal() {
    let suma = 0;
    carrito.forEach(function (p) {
        suma += p.precio;
    });
    return suma;
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

mostrarProductos();
mostrarCarrito();
console.log("Version 2 cargada desde rama2");
