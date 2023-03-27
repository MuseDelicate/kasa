import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import style from '../CSS/Collapse.module.css'

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(style.up);

// on peut mettre une condition dans un className
    return (
        <div className='collapse'>
            <div onClick={() => isOpen === style.down ? setIsOpen(style.up) : setIsOpen(style.down)} >
                <h2>{props.title}</h2>
                <FontAwesomeIcon icon={isOpen === style.down ? faChevronUp : faChevronDown} />
            </div>
            <div className={isOpen}>
                { 
                    props.children
                }
            </div>
            

        </div>

    
    )
}

export default Collapse;