import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    const courseCarts = useLoaderData().data;
    return (
        <div>
            <Slider></Slider>
            <div className='carts-container'>
            {
            courseCarts.map(cart => <QuizCart 
                cart={cart}
                key={cart.id}
                ></QuizCart>)
                
            }
            </div>     
        </div>
    );
};

export default Home;