import React, { use } from 'react';
import GreenContext from '../../Context/GreenContext';

const Home = () => {
    const {name}=use(GreenContext)
    return (
        <div>
            this is home page {name}
            <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni, explicabo fugit cum debitis architecto ratione, doloribus facere distinctio nisi consequatur velit nobis cupiditate vero, rerum voluptates accusantium suscipit aspernatur?
            </p>
            <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni, explicabo fugit cum debitis architecto ratione, doloribus facere distinctio nisi consequatur velit nobis cupiditate vero, rerum voluptates accusantium suscipit aspernatur?
            </p>
        </div>
    );
};

export default Home;