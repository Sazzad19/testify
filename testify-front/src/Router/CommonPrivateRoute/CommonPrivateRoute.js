import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const CommonPrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
    const userType = localStorage.getItem('userType');

    const location = useLocation();
   
        if(userType){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
};

export default CommonPrivateRoute;