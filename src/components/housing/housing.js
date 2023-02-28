import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header';
import HouseInformations from './houseInformations/houseInformations';
import HouseOwnerAndRating from './houseOwnerAndRating/houseOwnerAndRating';
import Collapse from '../collapse';
import Footer from '../footer';
import Carrousel from './carrousel';
import * as api from '../../utils/api';


// vérifier qu'on renvoie vers 404 si l'id n'est pas bon
// utiliser useNavigate pour rediriger vers 404
// useStat et useEffect pour afficher un seul item
// on met dans setData quant c'est disponible



const Housing = () => {
    // utiliser useParams pour récupérer l'id dans l'URL

    const { id } = useParams();
    console.info(id);

    // appeler l'API pour récupérer un seul item
    const [houseData, setHouseData] = useState([]); 

    // useEffect prend 2 paramètres : une fonction et un tableau de dépendance, permet de modifier l'état, pour une tâche différé
    useEffect(() => {
        api.oneHousingData()
            .then((res) => {
                setHouseData(res);
            })
        }, []);
        console.info(houseData);


    return (
        <div>
            <Header />
            <Carrousel />
            
            <div>
            
                <HouseInformations />
                {/* passer e, paramètres le tableau des tags */}
                <HouseOwnerAndRating  />
            </div>
            <div>
                <Collapse />
                <Collapse />
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