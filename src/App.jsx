import React from 'react';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import ItemCategoryContainer from './components/main/ItemCategoryContainer';
import ItemSearchContainer from './components/main/ItemSearchContainer';
import Footer from './components/footer/Footer';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
    return (
        < >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} /> 
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/category/:categoria" element={<ItemCategoryContainer />} />
                    <Route path="/search/:searchKeys" element={<ItemSearchContainer />} />
                </Routes>    
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
