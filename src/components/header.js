import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.svg'



const Header = () => {
    return(
        <div>
            <img src={LOGO} alt="logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>
    )
}

export default Header;