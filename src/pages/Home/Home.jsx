import React from 'react';
import BlogCarousel from '../../sections/BlogCarousel/BlogCarousel';
import TrendingTopic from '../../sections/TrendingTopic/TrendingTopic';
import Tabs from '../../sections/Tabs/Tabs';
import MostPopular from '../../sections/MostPopular/MostPopular';
import RandomPick from '../../sections/RandomPick/RandomPick';
import Instagram from '../../sections/Instagram/Instagram';


const Home = () => {
    return (
        <div className='bg-base-100'>
            <BlogCarousel />
            <div className='space-y-20'>
                <MostPopular />
                <TrendingTopic />
                <RandomPick />
                <Tabs />
                <Instagram />
            </div>
        </div>
    );
};

export default Home;