import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.svg';
import style from '../CSS/Header.module.css';



const Header = () => {
    return(
        <header className={style.headerKasa}>
            <img src={LOGO} alt="logo Kasa" />
            <nav>
                <Link to="/" >Accueil</Link>
                <Link to="/about" >A propos</Link>
            </nav>
        </header>
    )
}

export default Header;