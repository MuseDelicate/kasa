import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div>
            <img src="./logo.svg" alt="logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>
    )
}

export default Header;