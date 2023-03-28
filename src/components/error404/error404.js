import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import style from '../../CSS/Error404.module.css';


const Error404 = () => {
    return (
    <div >
        <Header />
        <div className={style.error}>
            <h2> 404 </h2>
            <h3> Oups! La page que vous demandez n'existe pas.</h3>
            <Link to={'/'} >
                Retourner sur la page d'accueil
            </Link>

        </div>
        <Footer />
    </div>
    )
}


export default Error404;