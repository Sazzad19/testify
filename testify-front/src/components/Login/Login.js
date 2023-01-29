import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';
import './Login.css'

const Login = () => {
   const {setUser, setLoading} = useContext(UserContext);
   const navigate = useNavigate();

  const handleLoginSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;

    const loginInfo = {
      email: form.email.value,
      password: form.password.value,
      }

  fetch('http://localhost:5000/api/signin',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
})
.then(res => res.json())
.then(data =>{
   setUser(data.result);
   setLoading(false);
   if(data.result.type === 'student')
   {
    console.log("studenttt");
     navigate('/assessments-student')
   }
   else{
    console.log("teacherrrr");

    navigate('/assessments');
   }
   
   localStorage.setItem('token', data.token);
})
  }

    return (
        <div className="wrapper">
        <div className="logo-login">
            <img src="https://www.freepnglogos.com/uploads/lamp/lamp-logo-mpada-luz-brilho-imagens-tis-pixabay-0.png" alt=""/>
        </div>
        <div className="text-center name">
        <h4 className=''>Testify</h4>
        </div>
        <form onSubmit={handleLoginSubmit} className="p-3 mt-3">
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
                <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-field">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            {/* <Link to="#">Forget password?</Link> or <Link to="signUp">Sign up</Link> */}
        </div>
    </div>
        
    );
};

export default Login;