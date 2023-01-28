import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(UserContext);
    const location = useLocation();
        
        if(loading)
        {
            return <div className='h-[400px] flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
        }
        if(user?.success){
            return children
        }
        return <Navigate to='/' state={{from: location}} replace ></Navigate>
    
};

export default PrivateRoute;