import React from 'react';
import homeBanner from '../../assets/homeBanner.jpg';

const HomeBanner = () => {
    return(
        <div>
            <img src={homeBanner} alt="Kasa" style={{
                objectFit: 'cover',
                width: '80%',
                height: '250px'
            }}/>
            <span>Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default HomeBanner;
