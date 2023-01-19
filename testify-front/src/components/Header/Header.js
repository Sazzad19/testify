import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="assessments"
        >
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

        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="/"
        >
          Login
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}
          to="signUp"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
