import React from 'react';
import Navbar from "./componentes/Navbar";
import Busquedas from './componentes/Busquedas';
import Logo from "./componentes/Logo";
import Carousel from './componentes/Carousel';
import ContProductos from './componentes/ContProductos';


const App = () => {
    return (
        < >
            <Logo />
            <Busquedas />
            <Navbar />
            <Carousel />
            <ContProductos />
        </>
    );
}

export default App;
