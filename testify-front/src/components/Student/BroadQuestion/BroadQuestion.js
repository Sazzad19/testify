import React, { useState } from 'react';
import './BroadQuestion.css'

const BroadQuestion = ({ques,inx, onFileChange}) => {
    const {question} = ques;
    const [type, setType] = useState('');
    const optionSelect = (event)=>{
        event.preventDefault();
        setType(event.target.value);
      }
    return (
     
      <div className='broad-container'>
      <div className="">
      <h4 className='question'>{inx+1}. {question}</h4>

      <div  className="select-container">
      <select  onInput={(event)=>optionSelect(event)} className='select-box'>
    <option selected disabled value="0">Select type:</option>
    <option value="typing">Write Question</option>
    <option value="file">File Upload</option>
     </select>
  
      </div>
   
        {
          type === 'typing' &&
            
       
           <textarea className='input'
           name={`${ques.id}`}
          //  onChange={(e)=>createAnswer(e.target.value,ques.id)}
            type="text"  id="classNumber" placeholder="Write your question"></textarea>
       
        }
        {
          type === 'file' &&
          <input
          // onChange={(e)=>createAnswer(e.target.value,ques.id)}
          type="file"   name={`${ques.id}`} id="classNumber" placeholder="file upload"  onChange={e => onFileChange(e, ques.id)} />
        }
      </div>

    </div>
    );
};

export default BroadQuestion;