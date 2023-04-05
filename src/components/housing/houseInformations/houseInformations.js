import React from 'react';
import style from '../../../CSS/HouseInformations.module.css';


const HouseInformations = (props) => {
    // props est un objet qui contient tout ce qui est passé en propriété lors de l'appel du composant

    // on initialise une variable 'compteur' pour pouvoir identifier chaque élément de la liste
    let compteur = 0;

    return (
        <div className={style.houseInformations}>
            <h2>{props.title}</h2>
            <span>{props.location}</span>
                <div className={style.tags}>
                    {(props.tags !== undefined) 
                    ? props.tags.map((elem) => (
                        <p key={props.id + `${compteur++}`}>
                            {elem}
                        </p>
                        ))
                    :''
                    }
                </div>
        </div>
    )
}


export default HouseInformations;