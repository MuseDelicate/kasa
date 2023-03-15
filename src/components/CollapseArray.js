import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// importer les icônes de font awesome que je vais utiliser, installer FA d'abord
// utiliser les props (un titre et une description) et les children avec props.children
// une children peut être juste une div

const CollapseArray = (props) => {
    let compteur = 0;
    const [isOpen, setIsOpen] = useState(false);

    if (props.details !== undefined) {
        console.log(props.details);
    }
    
    return (
        <div>
            <p>
                <button onClick={() => setIsOpen(true)}>Ouvrir</button>
                <button onClick={() => setIsOpen(false)}>Fermer</button>
                {props.title}
            </p>

            {(props.details !== undefined && isOpen) 
                ? props.details.map((elem) => (
                        <p key={props.id + `${compteur++}`}>{elem}</p>
                    ))
                :''
            }
            {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}

        </div>

    
    )
}

export default CollapseArray;