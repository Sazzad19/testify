import React, { createContext, useState } from 'react';


export const UserContext =  createContext();
const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
  
    const info ={
        setUser,
        user,
        loading,
        setLoading
      }
    return (
       <UserContext.Provider value={info}>
          {children}
       </UserContext.Provider>
    );
};

export default UserProvider;