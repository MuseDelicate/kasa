import React from 'react';
import LOGOwhite from '../assets/LOGOwhite.png';
import '../CSS/Footer.module.css';


const Footer = () => {
    return(
            <footer>
                <div>
                    <img src={LOGOwhite} alt="logo Kasa" />
                </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
    )
}

export default Footer;