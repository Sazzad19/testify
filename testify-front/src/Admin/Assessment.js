import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectOption from "./SelectOption";
import { FaPlusCircle } from "react-icons/fa";
import './Admin.css'
import Multiple from "./Multiple/Multiple";
import FillInTheGap from "./FillInTheGap/FillInTheGap";
import FileUpload from "./FileUpload/FileUpload";

const Assessment = () => {
  
  const [inputFields, setInputFields] = useState([
    {question: '',
    type: '',
    questionMark: '',
    correctAns: '',
    option1: '',
    option2:'', 
    option3: '', 
    option4:''}
])
  const optionSelect = (event, index) => {

      inputFields[index].type = event.target.value;
      setInputFields([...inputFields]);
    };

  const handleInput = (event,index)=>{
  let data = [...inputFields];
  data[index][event.target.name] = event.target.value;
  setInputFields(data);
  console.log('data', data)
  }

  const handleSubmit = ()=>{
    console.log('submit')
  }
  const addField = ()=>{
    let object =
     {question: '',
     questionMark: '',
     correctAns: '',
     type: '', 
     option1: '', 
     option2:'', 
     option3: '', 
     option4:''};
     setInputFields([...inputFields,object ])
  }
  
  return (
    <div>
     <form onSubmit={handleSubmit}>
     
     <Row className="g-3 mt-5">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Assessment Name">
            <Form.Control type="text" placeholder="assessment name" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Class">
            <Form.Control type="text" placeholder="class" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 my-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Subject">
            <Form.Control type="text" placeholder="subject" />
          </FloatingLabel>
        </Col>
    
        <Col md>
          <FloatingLabel className="bg-light" controlId="floatingInputGrid" label="Time Duration">
            <Form.Control type="text" placeholder="time duration" />
          </FloatingLabel>
        </Col>
      </Row>
    {
      inputFields.map((input, index)=> <div key={index}>
      {
         input.type === 'MCQ' && 
         <Multiple 
         index={index}
         input={input}
         handleInput={handleInput}>
         </Multiple>
       }
       {
          input.type === 'FIG' && 
         <FillInTheGap 
         index={index} 
         handleInput={handleInput}>
         </FillInTheGap>
       }
       {
          input.type === 'FS' && 
         <FileUpload
          index={index}
          handleInput={handleInput}>
          </FileUpload>
       }
       {
         input.type === '' ?
         <SelectOption optionSelect={optionSelect} index={index}
       ></SelectOption>
       :
       <></>
       }
       
      </div>)
      
    }
      
   </form> 
      <Row>
        <Col>
          <button onClick={addField} className="btn btn-primary" >Add Question   <FaPlusCircle></FaPlusCircle>
          </button>

        </Col>
      </Row>
      <button className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
    
    </div>
  );
};

export default Assessment;
