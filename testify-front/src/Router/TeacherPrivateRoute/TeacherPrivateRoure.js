import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const TeacherPrivateRoure = ({children}) => {
    const {user, loading} = useContext(UserContext);
  
    const location = useLocation();
    const token = localStorage.getItem('token');
        // if(user===null){
        //     return <div><h1>Loading</h1></div>
        // }
        if(user && user?.type === 'teacher'){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
  
     
};

export default TeacherPrivateRoure;