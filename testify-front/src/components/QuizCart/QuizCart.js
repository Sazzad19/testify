import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCart.css'

const QuizCart = ({cart}) => {
    const {name, id, logo,total} = cart;
    return (
        <div className='cart-container'>
            <div className='cart-logo d-flex align-items-center justify-content-center p-2'>
                {/* <img src={logo} alt="" /> */}
                <h2>{name}</h2>
            </div>
            <div className='cart-details'>
                <div>
                <h3>{name}</h3>
            <p> Total Quiz: {total}</p>
            <p> Time Limit: 1 hour</p>
            <Link to={`quiz/${id}`}><button className='practice-btn'>Start Test</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCart;