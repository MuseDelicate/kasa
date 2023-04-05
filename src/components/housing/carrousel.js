import React, { useState } from 'react';
import chevronRight from '../../assets/chevronRight.png';
import chevronLeft from '../../assets/chevronLeft.png';

import style from '../../CSS/Carrousel.module.css';

const Carrousel = (props) => {
    // Ce useState permettra de suivre l'index de l'image sur laquelle on est
    // par défaut on commence par l'image de d'index 0
    const [currentImg, setCurrentImg] = useState(0)
    let compteur;
    let total;
    if(props.pictures !== undefined){
        total = props.pictures.length;
        compteur = total - 1;
    }
    
    return (
        <div className={style.carrousel} >
            {(props.pictures !== undefined)
                ? 
                    <div className={style.carrouselContainer}>
                        <img 
                            src={props.pictures[currentImg]} 
                            alt={`vue ${currentImg + 1} du logement`}
                            className={style.pictures}
                        />
                        <div className={style.chevrons}>
                            <img 
                                src={total > 1 ? chevronLeft : ''} 
                                alt={total > 1 ? 'flèche gauche' : ''} 
                                className={total > 1 ? style.chevronLeft : ''}
                                onClick={() => {currentImg === 0 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}
                            />
                            <img 
                                src={total > 1 ? chevronRight : ''} 
                                alt={total > 1 ? 'flèche droite' : ''} 
                                className={total > 1 ? style.chevronRight : ''}
                                onClick={() => {currentImg < compteur ? setCurrentImg(currentImg + 1) : setCurrentImg(0)}}
                                />
                        </div>
                        <span className={style.index}>{currentImg + 1}/{total}</span>
                    </div>
                : ''
            }
        </div>
    )
}

export default Carrousel;
