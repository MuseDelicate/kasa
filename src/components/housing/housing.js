import { React/*, useParams*/ } from 'react';
import Header from '../header';
import HouseInformations from './houseInformations/houseInformations';
import HouseOwnerAndRating from './houseOwnerAndRating/houseOwnerAndRating';
import Collapse from '../collapse';
import Footer from '../footer';
import Carrousel from './carrousel';


const Housing = () => {
    //const { id } = useParams()
    return (
        <div>
            <Header />
            <Carrousel />
            
            <div>
                <HouseInformations />
                <HouseOwnerAndRating />
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