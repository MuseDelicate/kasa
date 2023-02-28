import { React } from 'react';
import Header from '../header';
import HomeBanner from './homeBanner';
import HouseCards from './houseCards/houseCards';
import Footer from '../footer';


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