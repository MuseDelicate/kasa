import React from 'react';
import style from '../CSS/Banner.module.css';

const Banner = (props) => {

    return(
        <div className={style.banner}>
            <img src={props.src} alt={props.alt} />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner;
