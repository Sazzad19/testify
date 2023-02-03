import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const TeacherPrivateRoure = ({children}) => {
    const userType = localStorage.getItem('userType');
    const location = useLocation();

        if(userType === 'teacher'){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
  
     
};

export default TeacherPrivateRoure;