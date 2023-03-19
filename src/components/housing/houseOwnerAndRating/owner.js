import React from 'react';
import Picture from '../../Picture';

const Owner = ({ host }) => {

    if (host !== undefined) {
        console.log(host);
    }
    return(
        <div>
            {host 
                ? 
                    <div>
                        <p>{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                    </div> 
                : ''
            }
            
            {/* <Picture picture={host.picture} name={host.name} /> */}
        </div>
    )
}

export default Owner;

// le plus important est de maintenir l'état du composant (useState)
// maintenir les props de chaque composant (props = propriétés du composant)
// les props sont les propriétés qu'on peut ajouter à la balise
// ces propriétés sont accessibles
// les props sont les variables qu'on passe à la fonction composant


