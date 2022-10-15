import React, {createContext, useState} from 'react';

const CarritoContext = createContext();
const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    
    const agregarAlCarrito = (id, cantidad) => {

        const carritoAux = carrito;
        const indice = carritoAux.findIndex((prod) => prod.id === id)       //Verificamos si el producto agregado ya está en el carrito
                                                                            // si ya está en el carrito findIndex devuelve el indice donde se encuentra, si nó esta en el carrito devuelve -1
        if (indice !== -1) {                    
            carritoAux.splice(indice, 1)
        }

        carritoAux.push({"id":id, "cantidad":cantidad})
        setCarrito(carritoAux);
    }

    const masMenosUnoCarrito = (id, op) => {            //Sumamos o restamos una unidad según el valor de op

        const carritoAux = carrito;
        const indice = carritoAux.findIndex((prod) => prod.id === id);

        (op === "+") ? carritoAux[indice].cantidad++ : carritoAux[indice].cantidad--;
        setCarrito(carritoAux);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, masMenosUnoCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
}

export {CarritoProvider, CarritoContext};
