import React, { useState, useEffect } from 'react';
import * as api from '../../../utils/api';
import { Link } from 'react-router-dom';


const HouseCards = () => {
    const [data, setData] = useState([]); // useState permet de maintenir l'état où le composant se trouve

    // useEffect prend 2 paramètres : une fonction et un tableau de dépendance, permet de modifier l'état, pour une tâche différé
    useEffect(() => {
        api.loadHousingDatas()
            .then((res) => {
                setData(res);
            })
        }, []);

    return (
        <div>
                {data.map((housing) => (
                    <Link to = {'/housing/' + housing.id}>
                        <div>
                                <img src={housing.cover} alt={`${housing} cover`} />
                                <span>{housing.title} </span>
                        </div>
                    </Link>
                ))
                }
            
        </div>
    )
}

export default HouseCards;

/* <Link to = '/housing/'> */

