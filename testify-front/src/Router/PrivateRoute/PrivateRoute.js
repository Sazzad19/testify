import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const userType = localStorage.getItem('userType');
        if(userType === 'student'){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
    
};

export default PrivateRoute;