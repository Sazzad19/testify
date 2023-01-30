import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const BroadQuestion = ({ques,inx, setAnswer, createAnswer}) => {
    const {question} = ques;
    const [type, setType] = useState('');
    const optionSelect = (event)=>{
        event.preventDefault();
        setType(event.target.value);
      }
    return (
     
        <div>
      <div className="question-container">
      <h4>{inx+1}. {question}</h4>
      <Form.Group  className="mb-3 ">
        {/* <Form.Label>Select Type</Form.Label> */}
        <Form.Select name='role'  onInput={(event)=>optionSelect(event)} className="form-field">
        <option  selected  value='typing'>Typing Answer</option>
        <option value='file'>File Upload</option>
        </Form.Select>
        </Form.Group>
        {
            type === 'typing' ?
            
            <div className="form-field">
            <span className="far fa-user"></span>
            <input
           onChange={(e)=>createAnswer(e.target.value,ques.id)}
            type="text" name="typingAnswer" id="classNumber" placeholder="Write your question" />
          </div>
          :
          <div className="form-field">
          <span className="far fa-user"></span>
          <input
          onChange={(e)=>createAnswer(e.target.value,ques.id)}
          type="file" name="file" id="classNumber" placeholder="file upload" />
        </div>
        }
       
     
      </div>

    </div>
    );
};

export default BroadQuestion;