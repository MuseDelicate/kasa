import React, { useState } from 'react';
import chevronLeft from '../../assets/chevronLeft.png';
import chevronRight from '../../assets/chevronRight.png';
import style from '../../CSS/Carrousel.module.css';

// on va utiliser useEffect car les images sont dans le json
// ajouter les chevrons sur les onClick avec preview et next
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
    
// compléter le alt !!!!!
    return (
        <div className={style.carrousel} >
            {(props.pictures !== undefined)
                ? 
                    <div className={style.carrouselContainer}>
                        <img src={props.pictures[currentImg]} alt='à compléter' className={style.pictures}/>
                        <div>
                            <img src={total > 1 ? chevronLeft : ''} alt={total > 1 ? 'flèche gauche' : ''} className={total > 1 ? style.chevronLeft : ''} onClick={() => {currentImg < 1 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}/>
                            {/* <img src={chevronLeft} alt='flèche gauche' className={style.chevronLeft}
                                onClick={() => {currentImg < 1 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}
                            /> */}
                            <img src={total > 1 ? chevronRight : ''} alt={total > 1 ? 'flèche droite' : ''} className={total > 1 ? style.chevronRight : ''} onClick={() => {currentImg < 1 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}/>

                            {/* <img src={chevronRight} alt='flèche droite' className={style.chevronRight}
                                onClick={() => {currentImg >= compteur ? setCurrentImg(0) : setCurrentImg(currentImg + 1)}}/> */}
                        </div>
                        <span className='index'>{currentImg + 1}/{props.pictures.length}</span>

                    </div>
                : ''
            }
        </div>
    )
}

export default Carrousel;

// src={isOpen === style.down ? chevronUp : chevronDown}