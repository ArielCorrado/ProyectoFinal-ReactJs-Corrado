import React from 'react';
import "./spinner.css"
import { useState, useEffect } from 'react';

const Spinner = () => {

    const spinneri = <div className="contSpinner">
                        <div className="swapping-squares-spinner spinner">
                            <div className="square" />
                            <div className="square" />
                            <div className="square" />
                            <div className="square" />
                        </div>
                     </div>

    const [spinner, setSpinner] = useState (spinneri);
 
    useEffect(() => {

        document.body.style.overflowY = "hidden";            //Ocultamos scroll

        setTimeout(() => {
            document.body.style.overflowY = "auto";        //Mostramos Scroll
            setSpinner(<></>);
        }, 1500);

    }, []);
        
    return (
        spinner
    );
}

export default Spinner;
