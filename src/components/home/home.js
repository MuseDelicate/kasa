import { React } from 'react';
import Header from '../Header';
import HomeBanner from './HomeBanner';
import HouseCards from './houseCards/HouseCards';
import Footer from '../Footer';
import style from '../../CSS/Home.module.css';


// ajouter ici le fichier css pour toute la page
const Home = () => {

    return (
    <div>
        <Header />
    <div className={style.bodyKasa}>
        <HomeBanner />
        <HouseCards />
    </div>
        <Footer />

    </div>
    )
}


export default Home;