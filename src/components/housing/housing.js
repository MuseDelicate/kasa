import React, {useState, useEffect} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../Header';
import HouseInformations from './houseInformations/HouseInformations';
import HouseOwnerAndRating from './houseOwnerAndRating/HouseOwnerAndRating';
import Collapse from '../Collapse';
import Footer from '../Footer';
import Carrousel from './Carrousel';
import * as api from '../../utils/api';
import style from '../../CSS/Housing.module.css';
import globalStyle from '../../CSS/Home.module.css';



// on met dans setData quant c'est disponible

const Housing = () => {
    // on va utiliser useParams pour récupérer l'id dans l'URL
    const { id } = useParams();

    const [houseData, setHouseData] = useState({}); 

    useEffect(() => {
        api.loadHousingDatas()
            .then((res) => {
                const resultat = res.filter(element => element.id === id);
                setHouseData(resultat[0]);
            })
        }, [id]);

    // si l'id fourni n'est pas retrouvé dans la liste des id récupérés de l'API alors
    // on renvoie vers la page d'erreur avec Navigate
    if (houseData === undefined) {
        return <Navigate to='/404'/>
    }

    // on initialise une variable 'compteur' pour pouvoir identifier chaque élément de la liste
    let compteur = 0;

    return (
        <div>
            <Header />
            {(houseData !== undefined)
            ?
            <div className={globalStyle.bodyKasa}>
                <Carrousel 
                    pictures = {houseData.pictures}
                />
                <div className={style.housingInfosAndOwnerContainer}>
                {/* on passe les paramètres en props dans les composants */}
                {/* ces propriétés seront retransmises au composant sous la forme d'un objet props */}
                    <HouseInformations 
                        id ={houseData.id}
                        title={houseData.title}
                        location={houseData.location}
                        tags={houseData.tags}
                    />
                    <HouseOwnerAndRating  
                        host={houseData.host}
                        rating={houseData.rating}
                    />
                </div>
                <div className={style.housingCollapseContainer}>
                    <div className={style.descriptionCollapse}>
                        <Collapse 
                                title={'Description'}
                            >
                                <p>{houseData.description}</p>
                            </Collapse>
                    </div>
                    <div className={style.equipmentsCollapse}>
                        <Collapse   
                            id={houseData.id}
                            title={'Equipements'}
                        >
                            <ul>
                                {houseData.equipments !== undefined 
                                    ? houseData.equipments.map(elem => (
                                        <li key={`${houseData.id} + ${compteur++}`}>{elem}</li>
                                    ))
                                        : ''
                                    }
                                </ul>
                            </Collapse>
                        </div>
                    </div>
            </div>
            : ''}
            <Footer />
        </div>
    )
}


export default Housing;