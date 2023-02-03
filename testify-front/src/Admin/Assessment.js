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
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Assessment = () => {
  
  const [typeSelect, setTypeSelect] = useState(null);
  const [type, setType] = useState(true);
  const [inputFields, setInputFields] = useState([
    {question: '',
    type: '',
    questionMark: '',
    correctAns: '',  
  }
])
  const optionSelect = (event, index) => {

      inputFields[index].type = event.target.value;
      setInputFields([...inputFields]);
    };

  const handleInput = (event,index)=>{
  let data = [...inputFields];
  data[index][event.target.name] = event.target.value;
  setInputFields(data);
  // console.log('data', data)
  }
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();

    const form = event.target;
    const questionInfo = [];
    inputFields.forEach(question =>{
      const questionToSend = {}
      questionToSend.question = question.question;
      questionToSend.type = question.type;
      questionToSend.rightAnswer = question.rightAnswer;
      questionToSend.mark = question.mark;
    
      const optionToSend = {}
      optionToSend.a = question.a;
      optionToSend.b = question.b;
      optionToSend.c = question.c;
      optionToSend.d = question.d;

      questionToSend.options = optionToSend


      questionInfo.push(questionToSend)

    })

    const assesmentInfo = {
      name: form.name.value,
      class : form.class.value,
      totalMarks:  0,
      subject: form.subject.value,
      timeLimit: form.timeDuration.value,
      type: typeSelect,
      questions: questionInfo
    }
   
    fetch('http://localhost:5000/api/assessment/create',{
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(assesmentInfo)
  })
  .then(res => res.json())
  .then(data =>{
    if(data.success){
      navigate('/assessments');
      toast('Assessment Create Successfully')
    }
    })
  }

  const handleTypeSelect = event =>{
    setTypeSelect(event.target.value);
    setType(false);
  }

  const addField = (event)=>{
    event.preventDefault();
      let object =
      {question: '',
      questionMark: '',
      correctAns: '',
      type: '',  
    }
      setInputFields([...inputFields,object ])
   
    
  }
  
  
  return (
    <div>
      <h2 className="text-center">Assessment</h2>
     <form onSubmit={(event)=>handleSubmit(event)}>
     
     <Row className="g-3 mt-5">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Name">
            <Form.Control type="text" name="name" placeholder="assessment name" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Class">
            <Form.Control type="text" name="class"  placeholder="class" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 my-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Subject">
            <Form.Control type="text" name="subject"  placeholder="subject" />
          </FloatingLabel>
        </Col>
    
        <Col md>
          <FloatingLabel className="bg-light" controlId="floatingInputGrid" label="Time Duration">
            <Form.Control type="text" name="timeDuration"  placeholder="time duration" />
          </FloatingLabel>
        </Col>
      </Row>
      {
        type && 
        <Row className="my-3 w-50">
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Type"
          >
            <Form.Select
              onInput={(event)=>handleTypeSelect(event)}
              aria-label="Floating label select example"
            >
              <option value={null} selected>Type</option>
              <option value="broad">Broad Question</option>
              <option value="short">Short Question</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      }
      
      {
        typeSelect === 'short' &&
      <div>
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
           input.type === '' ?
           <SelectOption optionSelect={optionSelect} index={index}
         ></SelectOption>
         :
         <></>
         }
         
        </div>)
          }
        <Row>
        <Col>
          <button onClick={addField} className="btn btn-primary" >Add Question   <FaPlusCircle></FaPlusCircle>
          </button>

        </Col>
      </Row>
       </div>
      }
{
        typeSelect === 'broad' &&
        <div>
          {
            inputFields.map((input, index)=>
            <FileUpload key={index}
            index={index}
            handleInput={handleInput}
            >
            </FileUpload>
            )
          }
       
          <Row>
          <Col>
            <button onClick={addField} className="btn btn-primary" >Add Question   <FaPlusCircle></FaPlusCircle>
            </button>
  
          </Col>
        </Row>
        </div>
      }

    
      
      <button className="btn btn-primary my-3" >Submit</button>
   </form> 
    </div>
  );
};

export default Assessment;
