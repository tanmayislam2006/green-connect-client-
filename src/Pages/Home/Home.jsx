import React, { use } from 'react';
import GreenContext from '../../Context/GreenContext';
import Loader from '../../Components/Loader/Loader';

const Home = () => {
    const {name}=use(GreenContext)
    return (
        <div>
            this is home page {name}
            <button className='btn btn-primary'>Home</button>
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