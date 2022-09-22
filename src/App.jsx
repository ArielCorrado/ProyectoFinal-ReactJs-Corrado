import React from 'react';
import Navbar from "./componentes/Navbar";
import Busquedas from './componentes/Busquedas';
import Logo from "./componentes/Logo";
import Carousel from './componentes/Carousel';
import CartProducto from './componentes/CartProducto';


const App = () => {
    return (
        < >
            <div className='contNav'>
                <Logo />
                <Busquedas />
                <Navbar />
            </div>
            <Carousel />
            <div className="flex">
                <CartProducto 
                imgScr = "pv7.jpeg"
                descripcion = "Placa de video Gainward GeForce RTX 3090 Phantom + 24gb DDR6"
                precio = "259600"
                />
            </div>
        </>
    );
}

export default App;
