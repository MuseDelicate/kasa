import { React } from 'react';
import Header from '../Header';
import Banner from '../Banner';
import HouseCards from './houseCards/HouseCards';
import Footer from '../Footer';
import style from '../../CSS/Home.module.css';
import homeBanner from '../../assets/homeBanner.png';



// ajouter ici le fichier css pour toute la page
const Home = () => {

    return (
    <div>
        <Header />
    <div className={style.bodyKasa} >
        <Banner title='Chez vous, partout et ailleurs' src={homeBanner} alt='bannière Kasa : des rochers en bord de mer'/>
        <HouseCards />
    </div>
        <Footer />

    </div>
    )
}


export default Home;