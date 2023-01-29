import React from 'react';
import { Link } from 'react-router-dom';
import './AssessmentsCart.css'

const AssessmentsCart = ({cart}) => {
    const {name,subject, id,totalMarks,timeLimit} = cart;
    return (
        <div className='cart-container'>
            <div className='cart-logo d-flex align-items-center justify-content-center p-2'>
                {/* <img src={logo} alt="" /> */}
                <h2 className='uppercase'>{subject}</h2>
            </div>
            <div className='cart-details'>
                <div>
            <p className='uppercase fw-bold'>{name}</p>
            <p> Total Quiz: {totalMarks}</p>
            <p> Time Limit: {timeLimit} min</p>
            <Link to={`assessments/details/${id}`}><button className='practice-btn'>Start Test</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AssessmentsCart;