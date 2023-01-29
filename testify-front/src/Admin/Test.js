import React from 'react';
import Form from 'react-bootstrap/Form'

const Test = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const type = form.role.value;
        const allUserInfo = {
          name,
          email,
          password,
          type
      }
      console.log(allUserInfo)
      }

    return (
        <div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
        <div className="form-field">
          <span className="far fa-user"></span>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className="form-field">
      
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-field">
       
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <Form.Group className="mb-3 ">
        <Form.Label>Select Type</Form.Label>
        <Form.Select name='role'  className="form-field">
        <option value='student' selected>Student</option>
        <option  value='teacher'>Teacher</option>
        </Form.Select>
        </Form.Group>
        </form>
        <button  className="btn mt-3">Sign Up</button>
        </div>
    );
};

export default Test;