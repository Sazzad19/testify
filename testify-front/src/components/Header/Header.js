import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider/UserProvider";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  const navigate = useNavigate();

 const logOut =()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('userType');

  setUser(null)
  navigate('/')
  console.log("clikkk");
 }
  return (
    <nav className="header">
      <div  className='nav-icons'>
        {open ? <i onClick={() => setOpen(!open)}  className="fa-solid fa-xmark"></i> 
        : <i onClick={() => setOpen(!open)} className="fa-solid fa-bars"></i>
        }
      </div>
      <div>
        <NavLink className="logo" to="/">
         Testify
        </NavLink>
      </div>
      <div className={`nav-link ${open ? 'top-4' : 'top-120'}`}>
      

        {
          userType === 'teacher' ?   
          <>
          <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="assessments">
          Assessments
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="admin"
        >
          Test Create
        </NavLink>
        </>
        :
        <></>
        }
        {userType &&
          <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="submission"
        >
          {
           userType === 'student' ? 'Marks' :'Submission'
          }
            
        </NavLink>
        }
        {
          userType === 'student' ? 
          <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="assessments-student">
          Assessments
        </NavLink>
        :
        <></>
        }
      
      {!userType ? 
              <NavLink
              className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
              to="/"
            >
              Login
            </NavLink>: 
            <></>
    }

{userType ? 
              <button
              className='btn btn-primary ms-3'
            onClick={logOut}
            >
              LogOut
            </button>: 
            <></>
    }


       { !userType ? 
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="signUp"
        >
          Sign Up
        </NavLink> : 
        <></>
       }
      </div>
    </nav>
  );
};

export default Header;
