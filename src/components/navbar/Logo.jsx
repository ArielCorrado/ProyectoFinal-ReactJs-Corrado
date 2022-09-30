import React from 'react';
import {Link} from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo" id="logo"> 
                <div className="logo__e"><span>e-</span><span className="logo__hard">HARD</span></div>
                <div className="logo__computacion">Computación</div>
            </div>
        </Link>    
    );
}

export default Logo;
