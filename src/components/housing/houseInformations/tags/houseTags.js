import React from 'react';
import Tag from './tag';
// attention le nombre de tag change selon les logements donc préférer une liste
// faire une boucle for
const HouseTags = () => {
    // créer une variable qui extrait le tableau des tags (importer le json)
    return (
        <div>
            <Tag tag={'cosy'}/>
            <Tag />
            <Tag />
        </div>
    )
}

export default HouseTags;