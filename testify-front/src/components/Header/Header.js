import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider/UserProvider";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

 const logOut =()=>{
  localStorage.removeItem('token');
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
        {/* <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="home"
        >
          Home
        </NavLink> */}

        {
          token && user && user?.type === 'teacher' ?   
          <>
          <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="assessments">
          Assessments
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="submission"
        >
            Submission
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="admin"
        >
          Admin
        </NavLink>
        </>
        :
        <></>
        }
        {
          token && user && user?.type === 'student' ? 
          <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="assessments-student">
          Assessments
        </NavLink>
        :
        <></>
        }
      
      {!user ? 
              <NavLink
              className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
              to="/"
            >
              Login
            </NavLink>: 
            <></>
    }

{user ? 
              <button
              className='btn btn-primary ms-3'
            onClick={logOut}
            >
              LogOut
            </button>: 
            <></>
    }


       { !user ? 
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
