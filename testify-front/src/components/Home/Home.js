import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';


import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    const courseCarts = useLoaderData().data;
    const {user} = useContext(UserContext);

    return (
        <div>
            <Slider></Slider>
            <div className='carts-container'>
            {/* {
            courseCarts.map(cart => <QuizCart 
                cart={cart}
                key={cart.id}
                ></QuizCart>)
                
            } */}
            </div>     
        </div>
    );
};

export default Home;