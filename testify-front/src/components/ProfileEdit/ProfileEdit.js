import React, { useContext } from 'react';
import './ProfileEdit.css'
import { FiEdit } from "react-icons/fi";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const ProfileEdit = () => {
    const {user} = useContext(UserContext);
    const userType = localStorage.getItem('userType');

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
    
    //   fetch('http://localhost:5000/api/signup',{
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(allUserInfo)
    // })
    // .then(res => res.json())
    // .then(data =>{
       
    // })
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
                    defaultValue={user?.name}
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
                    <Form.Control name='class' defaultValue={user?.class} type="text" placeholder="class" />
                </FloatingLabel>
                }
              
                <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control name='password' defaultValue={user?.password} type="password" placeholder="password" />
                </FloatingLabel>
                <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;