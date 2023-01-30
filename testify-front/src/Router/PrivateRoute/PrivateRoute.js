import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    const token = localStorage.getItem('token');
        // if(loading){
        //     return <div><h1>Loading</h1></div>
        // }
        if(user && user?.type === 'student'){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
    
};

export default PrivateRoute;