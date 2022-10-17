import React from 'react';
import "./spinner.css"

const Spinner = () => {

    return (
        <div className="contSpinner">
            <div className="swapping-squares-spinner spinner">
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
            </div>
        </div>
    );
}

export default Spinner;
