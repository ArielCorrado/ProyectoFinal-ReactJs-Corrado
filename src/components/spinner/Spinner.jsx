import React from 'react';
import "./spinner.css"
import { useState, useEffect } from 'react';

const Spinner = () => {

    const spinneri = <div className="contSpinner" style={{top: `${window.pageYOffset}px`, height: `${window.innerHeight}px`, position: "absolute"}}>
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
            document.body.style.overflowY = "scroll";        //Mostramos Scroll
            window.scrollTo(0, document.body.scrollHeight);  //Movemos window hacia abajo de todo
            setSpinner(<></>);
        }, 1500);

    }, []);
        
    return (
        spinner
    );
}

export default Spinner;
