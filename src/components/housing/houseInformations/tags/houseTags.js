import React from 'react';
import Tag from './tag';
// attention le nombre de tag change selon les logements donc préférer une liste
// faire une boucle for
const HouseTags = () => {
    return (
        <div>
            <Tag />
            <Tag />
            <Tag />
        </div>
    )
}

export default HouseTags;