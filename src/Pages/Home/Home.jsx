import React, { use } from 'react';
import GreenContext from '../../Context/GreenContext';
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    const {user}=use(GreenContext)

    return (
        <div>
                <Hero/>
        </div>
    );
};

export default Home;