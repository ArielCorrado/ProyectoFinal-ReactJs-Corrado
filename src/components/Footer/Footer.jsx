import React from 'react';

const Footer = () => {
    return (
        <div className='contFooter'>
            <div className="flex column">
                <div className='flex'>
                    <p className='ofertas'>Recibí ofertas exclusivas!</p>
                </div> 
                <div>
                    <input className="inputNewsLetter" type="email" placeholder="email" />
                    <button className="botonNewsLetter">Submit</button>
                </div>
            </div> 
            <ul className='contFooter__ul flex'>
                <li className='contFooter__ul__li'> Nosotros </li>
                <li className='contFooter__ul__li'> Contacto </li>
                <li className='contFooter__ul__li'> Soporte </li>
                <li className='contFooter__ul__li'> Ubicación </li>
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
