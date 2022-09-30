import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Carousel from './components/carousel/Carousel';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
    return (
        < >
            <BrowserRouter>
                <Navbar />
                <Carousel />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} /> 
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                 </Routes>    
            </BrowserRouter>
        </>
    );
}

export default App;
