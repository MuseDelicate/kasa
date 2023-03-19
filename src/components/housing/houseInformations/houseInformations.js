import React from 'react';

const HouseInformations = (props) => {
    // props est un objet qui contient tout ce que j'ai passé en propriété lors de l'appel du composant

    let compteur = 0;
    return (
        <div>
            <h2>{props.title}</h2>
            <div>{props.location}</div>
                <div>
                
                     {(props.tags !== undefined) ? 
                        props.tags.map((elem) => (
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