import React, { useState } from 'react';
import chevronLeft from '../../assets/chevronLeft.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
        <div>
            {(props.pictures !== undefined)
                ? 
                    <div>
                        <img src={props.pictures[currentImg]} alt='à compléter'/>
                        <span className='index'>{currentImg + 1}/{props.pictures.length}</span>
                        <div>
                        {/* comment faire pour  que l'image de la flèche se mette 'sur' la photo du logement ?  */}
                            <div className='arrow-left'>
                                <img src={chevronLeft} alt='fléche gauche'
                                onClick={() => {currentImg < 1 ? setCurrentImg(compteur) : setCurrentImg(currentImg - 1)}}
                                />
                            </div>
                            <div className='arrow-right' >
                                <FontAwesomeIcon icon={faChevronRight} onClick={() => {currentImg >= compteur ? setCurrentImg(0) : setCurrentImg(currentImg + 1)}}/>
                            </div>
                        </div>
                    </div>
                : ''
            }
            
        </div>
    )
}

export default Carrousel;

