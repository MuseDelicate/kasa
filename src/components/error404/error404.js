import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';


const Error404 = () => {
    return (
    <div>
        <Header />
            <h2> 404 </h2>
            <h3> Oups! La page qu vous demandez n'existe pas.</h3>
            <Link to={'/'} className='returnToHome'>
                Retourner sur la page d'accueil
            </Link>
        <Footer />
    </div>
    )
}


export default Error404;