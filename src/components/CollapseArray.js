import { React, useState } from 'react';
import chevronDown from '../assets/chevronDown.png';
import chevronUp from '../assets/chevronUp.png';


// importer les icônes de font awesome que je vais utiliser, installer FA d'abord
// utiliser les props (un titre et une description) et les children avec props.children
// une children peut être juste une div

const CollapseArray = (props) => {
    let compteur = 0;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <p>
                <button onClick={() => setIsOpen(true)}>
                    <img src={chevronDown} alt="flèche vers le bas" />
                </button>
                <button onClick={() => setIsOpen(false)}>
                    <img src={chevronUp} alt="flèche vers le bas" />
                </button>
                {props.title}
            </p>

            {(props.details !== undefined && isOpen) 
                ? props.details.map((elem) => (
                        <p key={props.id + `${compteur++}`}>{elem}</p>
                    ))
                :''
            }

        </div>

    
    )
}

export default CollapseArray;