import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import { subirBDD } from './utils/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <CarritoProvider>
        <App />
    </CarritoProvider>
    // </React.StrictMode> 
);



