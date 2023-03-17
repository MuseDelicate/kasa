import React from 'react';
import Picture from '../../Picture';

const Owner = (props) => {
    if (props.host) {
        console.log(props);
        console.log(props.host.name);
        console.log(props.host.picture);
    }
    return(
        <div>
            {props.host ? <span>{props.host.name}</span> : ''}
            <p>photo du propriétaire</p>
            {/* <Picture picture={props.host.picture} name={props.host.name} /> */}
        </div>
    )
}

export default Owner;

// le plus important est de maintenir l'état du composant (useState)
// maintenir les props de chaque composant (props = propriétés du composant)
// les props sont les propriétés qu'on peut ajouter à la balise
// ces propriétés sont accessibles
// les props sont les variables qu'on passe à la fonction composant


