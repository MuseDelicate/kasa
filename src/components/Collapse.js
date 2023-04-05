import { React, useState } from 'react';
import chevronUp from '../assets/chevronUp.png';
import chevronDown from '../assets/chevronDown.png';
import style from '../CSS/Collapse.module.css';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(style.up);
    // on utilise le style pour gérer les 2 états du collapse

    return (
        (props !== undefined)
        ?
        <div className={style.collapse}>
            <div onClick={() => isOpen === style.down ? setIsOpen(style.up) : setIsOpen(style.down)} className={style.collapseTitle}>
                <h3>{props.title}</h3>
                <img src={isOpen === style.down ? chevronUp : chevronDown} alt={isOpen === style.down ? 'flèche vers le haut' : 'flèche vers le bas'} />
            </div>
            <div className={`${isOpen} + ${style.collapseContent}`}>
                {/* avec props.children, le composant n'a pas besoin de connaître le contnu passé à l'intérieur */}
                {/* celà nous permet de passer un string ou un tableau aux collapses */}
                { 
                    props.children
                }
            </div>
        </div>
        : ''
    )
}

export default Collapse;