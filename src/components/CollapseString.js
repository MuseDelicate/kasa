import { React, useState } from 'react';

// utiliser les props (un titre et une description) et les children avec props.children
// une children peut être juste une div

const CollapseString = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <p>
                <button onClick={() => setIsOpen(true)}>
                    Ouvrir
                </button>
                <button onClick={() => setIsOpen(false)}>Fermer</button>
                {props.title}
            </p>

            {(props.details !== undefined && isOpen) 
                ? <p>{props.details}</p>
                : ''
            }

        </div>

    
    )
}

export default CollapseString;