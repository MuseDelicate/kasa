import React from 'react';
import homeBanner from '../../assets/homeBanner.png';
import style from '../../CSS/HomeBanner.module.css';


const HomeBanner = () => {
    return(
        <div className={style.banner}>
            <img src={homeBanner} alt="Kasa" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default HomeBanner;
