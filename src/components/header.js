import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.svg';
import '../CSS/Header.module.css';



const Header = () => {
    return(
        <div className='header-kasa'>
            <img src={LOGO} alt="logo Kasa" />
            <nav className='navigation'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>
    )
}

export default Header;