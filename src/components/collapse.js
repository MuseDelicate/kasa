import { React, useState } from 'react';


const Collapse = () => {
    const [isOpen, setIsOpen] = useState(false);
// tout mettre dans des div ?
    return isOpen ? (
        <button onClick ={() => setIsOpen(false)}> fermer le collapse </button>
    ) : (
        <button onClick = {() => setIsOpen(true)}> Ouvrir le collapse </button>
    )
}

export default Collapse;