import React from 'react';
import Reviews from '../Reviews/Reviews';
import ThreeProducts from '../ThreeProducts/ThreeProducts';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <ThreeProducts></ThreeProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;