const leerBDD = async () => {
    const resp = await fetch("../json/productos.json")
    const data = await resp.json();
    const productos = data.map((prod) => [prod.id, prod])
    return productos;
}

const leerProducto = async (id) => {
    const resp = await fetch("../json/productos.json");
    const data = await resp.json();
    const producto = data.find((prod) => prod.id === id);
    const productoN = [producto.id, producto];
    return productoN;
}






export {leerBDD, leerProducto};