import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import HouseInformations from './houseInformations/HouseInformations';
import HouseOwnerAndRating from './houseOwnerAndRating/HouseOwnerAndRating';
import Collapse from '../Collapse';

import Footer from '../Footer';
import Carrousel from './Carrousel';
import * as api from '../../utils/api';


// vérifier qu'on renvoie vers 404 si l'id n'est pas bon
// utiliser useNavigate pour rediriger vers 404
// useStat et useEffect pour afficher un seul item
// on met dans setData quant c'est disponible



const Housing = () => {
    // on va utiliser useParams pour récupérer l'id dans l'URL
    const { id } = useParams();

    // appeler l'API pour récupérer un seul item
    const [houseData, setHouseData] = useState([0]); 


    // useEffect prend 2 paramètres : une fonction et un tableau de dépendance, permet de modifier l'état, pour une tâche différé
    // évite les await
    // utilisé pour modifier l'état du composant (quand ça peut prendre un certain temps)
    // mettre des conditions dans les pages si props en paramètres car useEffect va se relancer 2 fois
    useEffect(() => {
        api.loadHousingDatas()
            .then((res) => {
                const resultat = res.filter(element => element.id === id)
                setHouseData(resultat);
            })
        }, [id]);
        // on pourrait le modifier avec la fonction oneHousingData

        let compteur = 0;

    return (
        <div>
            <Header />
            <Carrousel 
                id = {houseData[0].id}
                pictures = {houseData[0].pictures}
            />
            {/* passer le tableau des images. Utiliser l'index du tableau, en fonction de la taille du tableau. index ++ ou index -- */}
            <div>
                <HouseInformations 
                    id ={houseData[0].id}
                    title={houseData[0].title}
                    location={houseData[0].location}
                    tags={houseData[0].tags}
                />
                <HouseOwnerAndRating  
                    host={houseData[0].host}
                    rating={houseData[0].rating}
                />
            </div>
            {/* passer juste le contenu dans une props.children */}
            <div>
                <Collapse 
                    id={houseData[0].id}/* à supprimer ??? */
                    title={'Description'}
                >
                    <p>{houseData[0].description}</p>
                </Collapse>

                <Collapse  
                    id={houseData[0].id}/* ??? */
                    title={'Equipements'}
                    >
                    <ul>
                        {houseData[0].equipments !== undefined 
                            ? houseData[0].equipments.map(elem => (
                                <li key={`${houseData[0].id} + ${compteur++}`}>{elem}</li>
                            ))
                            : ''
                        }
                    </ul>

                </Collapse>

            </div>
            <Footer />
          
        </div>
    )
}


export default Housing;