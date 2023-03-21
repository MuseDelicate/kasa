import { React } from 'react';
import Header from '../Header';
import HomeBanner from './HomeBanner';
import HouseCards from './houseCards/HouseCards';
import Footer from '../Footer';

// ajouter ici le fichier css pour toute la page
const Home = () => {

    return (
    <div>
        <Header />
        <HomeBanner />
        <HouseCards />
        <Footer />

    </div>
    )
}


export default Home;