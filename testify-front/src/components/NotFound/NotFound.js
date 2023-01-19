import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Go Back<Link to='/' className='back-home'> Home</Link></p>
        </div>
    );
};

export default NotFound;