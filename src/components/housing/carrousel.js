import React, { useState } from 'react';

// on va utiliser useEffect car les images sont dans le json
// ajouter les chevrons sur les onClick avec preview et next
const Carrousel = (props) => {
    // Ce useState permettra de suivre l'index de l'image sur laquelle on est
    // par défaut on commence par l'image de d'index 0
    const [currentImg, setCurrentImg] = useState(0)
    let compteur;
    if(props.pictures !== undefined){
        compteur = props.pictures.length - 1;
    }
    

    return (
        <div className='carrousel'>
            {(props.pictures !== undefined)
                ? 
                    <div className='carrouselInner'>
                        <img src={props.pictures[currentImg]} alt='à compléter'/>
                        <span className='index'>{currentImg + 1}/{props.pictures.length}</span>
                        <div>
                            <div className='arrow-left'>
                                <button onClick={() => {currentImg < 1 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}>
                                    Précédent
                                </button>
                            </div>
                            <div className='arrow-right' >
                                <button onClick={() => {currentImg >= compteur ? setCurrentImg(0) : setCurrentImg(currentImg + 1)}}>
                                    Suivant
                                </button>
                            </div>
                        </div>
                    </div>
                : ''
            }
            
        </div>
    )
}

export default Carrousel;

