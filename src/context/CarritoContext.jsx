import React, {createContext, useState} from 'react';

const CarritoContext = createContext();
const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const [carritoCant, setCarritoCant] = useState(0);
    
    const agregarAlCarrito = (id, cantidad) => {

        const carritoAux = carrito;
        const indice = carritoAux.findIndex((prod) => prod.id === id)       //Verificamos si el producto agregado ya está en el carrito
                                                                            // si ya está en el carrito findIndex devuelve el indice donde se encuentra, si nó esta en el carrito devuelve -1
        if (indice !== -1) {                    
            carritoAux.splice(indice, 1)
        }

        carritoAux.push({"id":id, "cantidad":cantidad})
        setCarrito(carritoAux);
        setearCarritoCantidad ();
    }

    const masMenosUnoCarrito = (id, op) => {            //Sumamos o restamos una unidad según el valor de op

        const carritoAux = carrito;
        const indice = carritoAux.findIndex((prod) => prod.id === id);

        (op === "+") ? carritoAux[indice].cantidad++ : carritoAux[indice].cantidad--;
        setCarrito(carritoAux);
        setearCarritoCantidad ();
    }

    const setearCarritoCantidad = () => {

        const cantidadEnCarrito = carrito.reduce((ac, el) => ac + el.cantidad, 0);              //Calculamos la cantidad de items en el carrito
        setCarritoCant (cantidadEnCarrito);                                                     //Seteamos la cantidad en el icono del carrito
    }

    const eliminarDelCarrito = (id) => {

        const carritoAux = carrito;
        const indice = carritoAux.findIndex((prod) => prod.id === id);
        carritoAux.splice(indice, 1);
        setCarrito(carritoAux);
        setearCarritoCantidad ();
    }

    return (
        <CarritoContext.Provider value={{carrito, eliminarDelCarrito, agregarAlCarrito, masMenosUnoCarrito, carritoCant}}>
            {children}
        </CarritoContext.Provider>
    );
}

export {CarritoProvider, CarritoContext};
