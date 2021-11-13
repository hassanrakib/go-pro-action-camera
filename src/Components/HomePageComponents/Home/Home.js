import React from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import ThreeProducts from '../ThreeProducts/ThreeProducts';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <ThreeProducts></ThreeProducts>
            <ExtraSection></ExtraSection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;