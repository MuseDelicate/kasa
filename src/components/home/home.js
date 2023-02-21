import React from 'react';
import Header from '../header';
import HomeBanner from './homeBanner';
import HouseCardsContent from './houseCardsContent/houseCardsContent';
import Footer from '../footer';


const Home = () => {
    return (
    <div>
        <Header />
        <HomeBanner />
        <HouseCardsContent />
        <Footer />

    </div>
    )
}


export default Home;