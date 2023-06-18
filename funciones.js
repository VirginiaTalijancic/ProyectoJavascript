function guardarModelosLS() {
    localStorage.getItem("modelos", JSON.stringify(modelos));
}

function cargarModelosLS() {
    return JSON.parse(localStorage.getItem("modelos"));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("Carrito"));
}

function buscarModelo(id) {
const modelos=cargarModelosLS();
return modelos.find(item=> item.id===id);
}

function agregarModelo(id) {
    const carrito =cargarCarritoLS();
    const modelos=buscarModelo(id);
    carrito.push(modelos);
    guardarModelosLS(carrito)
    renderBotonCarrito();
}

function eliminarModelo(id) {
    const carrito= cargarCarritoLS();
    const nuevoCarrito= carrito.filter(item => item.id != id)
    guardarModelosLS();
    renderBotonCarrito();
    
}

function vaciarCarrito() {
    localStorage.removeItem("Carrito");
    renderBotonCarrito();
    renderModelos();
}