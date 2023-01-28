import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'

const SignUp = () => {
const [classNumber, setClassNumber] = useState('');
const navigate = useNavigate();


  const handleSubmit = (event)=>{
    event.preventDefault();

    const form = event.target;
    
    const allUserInfo = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      class: form.classNumber.value,
      type: form.role.value
  }

  fetch('http://localhost:5000/api/signup',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(allUserInfo)
})
.then(res => res.json())
.then(data =>{
   if(data.success)
   {
    navigate('/')
   }  
})
  }

  const optionSelect = (event)=>{
    event.preventDefault();
    setClassNumber(event.target.value);
  }
  return (
    <div className="wrapper">
      <div className="logo-login">
      <img src="https://www.freepnglogos.com/uploads/lamp/lamp-logo-mpada-luz-brilho-imagens-tis-pixabay-0.png" alt=""/>
      </div>
      <div className="text-center mt-4 name"><h4 className=''>Testify</h4></div>
      <form onSubmit={handleSubmit} className="p-3 mt-3">
        <div className="form-field">
          <span className="far fa-user"></span>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-field">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <Form.Group  className="mb-3 ">
        {/* <Form.Label>Select Type</Form.Label> */}
        <Form.Select name='role'  onInput={(event)=>optionSelect(event)} className="form-field">
        <option value='null'>Select Role</option>
        <option   value='teacher'>Teacher</option>
        <option value='student'>Student</option>
        </Form.Select>
        </Form.Group>
        {
            classNumber === 'student' &&  <div className="form-field">
            <span className="far fa-user"></span>
            <input type="text" name="classNumber" id="classNumber" placeholder="Class Number" />
          </div>
        }
       
        <button className="btn mt-3">Sign Up</button>
      </form>
      <div className="text-center fs-6">
        <span>
          <small>Already have a account? Please</small>
        </span>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
