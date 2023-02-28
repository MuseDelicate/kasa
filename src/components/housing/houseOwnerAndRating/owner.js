import React from 'react';
// import Image from 'image';
// créer un composant image pour l'inclure à chaque fois qu'il y en aura besoin


const Owner = () => {
    return(
        <div>
            <span>Alexandre Dumas</span>
            {/* <Image /> */}
            {/* <img  src='' alt="Le propriétaire" /> */}
        </div>
    )
}

export default Owner;

// le plus important est de maintenir l'état du composant (useState)
// maintenir les props de chaque composant (props = propriétés du composant)
// les props sont les propriétés qu'on peut ajouter à la balise
// ces propriétés sont accessibles
// les props sont les variables qu'on passe à la fonction composant