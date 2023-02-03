import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Row from 'react-bootstrap/esm/Row';
import {useParams } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Multiple from '../../Admin/Multiple/Multiple';
import FillInTheGap from '../../Admin/FillInTheGap/FillInTheGap';
import FileUpload from '../../Admin/FileUpload/FileUpload';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const EditAssessments = () => {

    let { id } = useParams();
    const [assessments, setAssessments] = useState({})
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate();

    useEffect( ()=>{
    fetch(`http://localhost:5000/api/assessment/details/${id}`,
          {
            method: 'GET',
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log('edit assessments',data)
            if(data.success)
            {
              setAssessments(data.result)
              setQuestions(data.result.Questions)
            }
        })
    }, [id]);

    // const handleInput = ()=>{
    // }
    const handleInput = (event,index)=>{
      if(['a', 'b', 'c', 'd'].indexOf(event.target.name) != -1){
        questions[index]['options'][event.target.name] = event.target.value;
      }else{
        questions[index][event.target.name] = event.target.value;
      }
      setQuestions([...questions]);
      }
    const handleAssessment = (event)=>{
      assessments[event.target.name] = event.target.value;
      setAssessments(assessments);
      }
    const handleSubmit = (event)=>{
      event.preventDefault();
      assessments.questions = questions;
      delete assessments.id
     
      fetch(`http://localhost:5000/api/assessment/update/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(assessments)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.success){
        navigate('/assessments');
        toast('Assessment Updated Successfully')
      }
      })
    }
    return (
    <div className='container'>
             
      <form onSubmit={handleSubmit}> 
     <Row className="g-3 mt-5">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Name">
            <Form.Control type="text" name="name" 
            defaultValue={assessments.name
            }
            placeholder="assessment name"
            onChange={(event) =>handleAssessment(event)} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Class">
            <Form.Control type="text"
            defaultValue={assessments.class
            }
            name="class"  placeholder="class"
            onChange={(event) =>handleAssessment(event)} />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 my-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Subject">
            <Form.Control type="text" 
            defaultValue={assessments.subject
            }
            name="subject"  placeholder="subject"
            onChange={(event) =>handleAssessment(event)} />
          </FloatingLabel>
        </Col>
    
        <Col md>
          <FloatingLabel className="bg-light" controlId="floatingInputGrid" label="Time Duration">
            <Form.Control type="text" 
            defaultValue={assessments.timeLimit
            }
            name="timeDuration"  placeholder="time duration"
            onChange={(event) =>handleAssessment(event)} />
          </FloatingLabel>
        </Col>
      </Row>

     {
        assessments.type === 'short' && 
        <>
        {
           questions.map( (question, index)=> 
           <div key={index}>
           {
             question.type === 'MCQ' && 
             <Multiple 
             index={index}
             input={question}
             handleInput={handleInput}>
             </Multiple>
           }
            {
            question.type === 'FIG' && 
           <FillInTheGap 
           index={index} 
           input={question}
           handleInput={handleInput}>
           </FillInTheGap>
            }
           </div>) 
        }
        
        </>
     }

     {
         assessments.type === 'broad' && 
         
         questions.map((qestion, index)=>
          <FileUpload key={index}
          index={index}
          input={qestion}
          handleInput={handleInput}
          >
          </FileUpload>
          )
        
     }

      {/* {
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
      } */}
      
      {/* {
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
      } */}

       {/* {
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
       } */}

    
      
      <button className="btn btn-primary my-3" >Update</button>
   </form> 
        </div>
    );
};

export default EditAssessments;