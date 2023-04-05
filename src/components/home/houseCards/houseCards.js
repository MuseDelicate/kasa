import React, { useState, useEffect } from 'react';
import * as api from '../../../utils/api';
import { Link } from 'react-router-dom';
import style from '../../../CSS/HouseCards.module.css'

// ce composant regroupe les cards de chaque logement

const HouseCards = () => {
    // on utilise useState pour maintenir l'état d'un composant, même si le composant est re-render (la page rechargée)
    // on utilise la décomposition pour simplifier l'écriture
    // initialement le state est vide (le tableau de logement est vide)
    const [data, setData] = useState([]); 

    // useEffect va permettre de déclencher un effet (la fonction) à un moment donné (par le tableau de dépendance) pour mettre à jour le state du composant
    // ici on précise un tableau de dépendance vide à useEffect donc il se déclenche à l'ouverture de la page
    // le useEffect est une tâche différée qui peut prendre un certain temps
    useEffect(() => {
        // la fonction loadHousingDatas() permet de récupérer les données de l'API
        api.loadHousingDatas()
            .then((res) => {
                setData(res);
                // puis on ajoute ces données au state quand elles sont disponibles
            })
        }, []);

    return (
        <div className={style.houseCards}>
        {/* si les données ne sont pas récupérées (data est à undefined) alors la page ne s'affiche pas */}
        {/* évite les erreurs renvoyées par le navigateur si une machine n'est pas assez rapide pour récupérer les données */}
        {(data !== undefined)
            ?
            data.map((housing) => (
                <li key={housing.id}>
                    <Link to = {'/housing/' + housing.id} className={style.houseCard}>
                            <img src={housing.cover} alt={`${housing.title} cover`} />
                            <span>{housing.title} </span>
                    </Link>
                </li>
                ))
            : ''
        }
        
        </div>
    )
}

export default HouseCards;


