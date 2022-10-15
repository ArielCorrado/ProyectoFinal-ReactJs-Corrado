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

    return (
        <CarritoContext.Provider value={{carrito, agregarAlCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
}

export {CarritoProvider, CarritoContext};