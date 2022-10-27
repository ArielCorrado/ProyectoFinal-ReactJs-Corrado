import React from 'react';

const Footer = () => {
    return (
        <div className='contFooter'>
            <div className="flex column cont_newsLetter">
                <div className='flex'>
                    <p className='ofertas'>Recibí ofertas exclusivas!</p>
                </div> 
                <div>
                    <input className="inputNewsLetter" type="email" placeholder="email" />
                    <button className="botonNewsLetter">Submit</button>
                </div>
            </div> 
            <ul className='contFooter__ul flex'>
                <li className='contFooter__ul__li' key="Nosotros"> Nosotros </li>
                <li className='contFooter__ul__li' key="Contacto"> Contacto </li>
                <li className='contFooter__ul__li' key="Soporte"> Soporte </li>
                <li className='contFooter__ul__li' key="Ubicación"> Ubicación </li>
            </ul>         
            <div className='footer__contImg flex'>
                <img className='footer_img' src="../images/facebook.png" alt="" />
                <img className='footer_img' src="../images/ws.png" alt="" />
                <img className='footer_img' src="../images/instagram.png" alt="" />
            </div>    
        </div>
    );
}

export default Footer;
