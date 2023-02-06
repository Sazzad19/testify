import React, { useEffect, useState } from 'react';
import './ProfileEdit.css'
import { FiEdit } from "react-icons/fi";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
   
    const userType = localStorage.getItem('userType');
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    

    const handleUpdate= (event)=>{
        event.preventDefault();
        let allUserInfo;
        const form = event.target;
        if(userType=== 'student')
        {
          allUserInfo = {
            name: form.name.value,
            password: form.password.value,
            class: form.class.value,
          
        }
      } 
        else{
           allUserInfo = {
            name: form.name.value,
            password: form.password.value,
            
        }
      } 
    console.log(allUserInfo)
      fetch(`http://localhost:5000/api/profile-update/${userInfo.id}`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(allUserInfo)
    })
    .then(res => res.json())
    .then(data =>{
       
       if(data.success)
       {
        toast('successfully update');
        localStorage.removeItem('userInfo');
        localStorage.setItem('userInfo', JSON.stringify(data.result))
       
        if(userInfo.type === 'student')
        {
          navigate('/assessments-student')
        }
        else{
         navigate('/assessments');
        }
        
       }
       else{
        toast(data.message);
       }
    })
      }
    
    return (
        <div className='mt-5'>
            <h2 className='my-4  text-center'>Profile <FiEdit className='text-primary'></FiEdit></h2>
            <form onSubmit={handleUpdate} className='profile'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control 
                    defaultValue={userInfo.name}
                    name="name"
                    type="text" placeholder="Your Name" />
                </FloatingLabel>
                {
                    userType === 'student' &&
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Class"
                    className="mb-3"
                >
                    <Form.Control name='class' defaultValue={userInfo.class} type="text" placeholder="class" />
                </FloatingLabel>
                }
              
                <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control name='password' defaultValue={userInfo.password} type="password" placeholder="password" />
                </FloatingLabel>
                <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;