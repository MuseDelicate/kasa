import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header';
import HouseInformations from './houseInformations/houseInformations';
import HouseOwnerAndRating from './houseOwnerAndRating/houseOwnerAndRating';
import CollapseString from '../CollapseString';
import CollapseArray from '../CollapseArray';

import Footer from '../footer';
import Carrousel from './carrousel';
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
        console.log(houseData);
        // on pourrait le modifier avec la fonction oneHousingData

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
            <div>
                <CollapseString 
                    id={houseData[0].id}/* ??? */
                    title={'Description'}
                    details={houseData[0].description}
                />
                <CollapseArray 
                    id={houseData[0].id} /* ??? */
                    title={'Equipements'}
                    details={houseData[0].equipments}
                />
            </div>
            <Footer />

            {/** revoir la syntaxe. Créer un tableau de lien d'image pour chaque location proposée ? ou utiliser l'id 
            <ul>
            housingList.pictures.forEach(pictures => {
                <li>
                    <img src={housing.pictures} alt="" />
                </li>
           

                })
            </ul>
            */}
          
        </div>
    )
}


export default Housing;