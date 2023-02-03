import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../../Context/UserProvider/UserProvider';
import FillInTheGap from '../../FillInTheGap/FillInTheGap';
import Question from '../../Question/Question';
import BroadQuestion from '../BroadQuestion/BroadQuestion';
import { useNavigate } from 'react-router-dom';


const AssessmentDetalis = () => {
 
    const [Assessment, setAssessment] =  useState({});
    const [questions, setQuestions] =  useState([]);
    const {user} = useContext(UserContext);
    const [answers] = useState([])
    const [count, setCount] = useState(0);
    const [timeCountDown, setTimeCountDown] = useState(0);

    const [countInTimeout, setCountInTimeout] = useState(0);
    let { id } = useParams();
    const navigate = useNavigate();
    const formToSubmit = useRef();

   
   const createSubmit = ()=>{
    formToSubmit.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
   }

    // useEffect(() => {
    //   setTimeout(() => {
    //     createSubmit()
    //   }, Assessment.timeLimit*60000);
    // }, []);

    // useEffect(() => {
    //   setInterval(() => {
    //     console.log("timer", timeCountDown);
    //     setTimeCountDown(timeCountDown+1)
    //   }, 10000);
    // }, []);

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
            
            setAssessment(data.result)
            setQuestions(data.result.Questions)
        })
    }, [id]);

    const handleSubmission = async (event)=>{
      event.preventDefault();
    

        const form = event.target;
        const data = new FormData(form)
        
        for(let name of data.keys()){
          if(answers.findIndex(ans => ans.questionId === name) === -1){
            answers.push({questionId: name, type: "text", answer: data.get(name)})
          }
        }
        console.log('array', answers)

        for(let answer of answers){
          if(answer.type && answer.type === "file"){
            let formData = new FormData()
            formData.append('file', answer.answer)
            const response = await fetch('http://localhost:5000/upload', {
              method: 'POST',
              body: formData,
            })
            let res = await response.json()
            answer.answer = res.result;          
          }
        }
        const submissionInfo = {
          UserId: user.id,
          AssessmentId: Assessment.id,
          answers: answers
          }

  
    fetch('http://localhost:5000/api/submission/create',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`
    },
      body: JSON.stringify(submissionInfo)
  })
  .then(res => res.json())
  .then(data =>{
    if(data.success)
    {
      navigate('/assessments-student');
      toast('Submission successFully')
    }
  })

    }
    
    const handleFileChange = (event, questionId) => {
      answers.push({questionId: questionId, type: "file", answer: event.target.files[0]})
    }
 
    return (
        <div className='container my-5'>
        <h2 className='mb-5 text-center'>{Assessment.name}</h2>
        <div className='d-flex justify-content-between mb-5'>
          <h5>Class: {Assessment.class}</h5>
          <h5>Subject: {Assessment.subject}</h5>
          <h5>Total Marks: {Assessment.totalMarks}</h5>
          <h5>Time Limit: {Assessment.timeLimit} Minutes</h5>
          {/* <h5>Time Left: {Assessment.timeLimit - timeCountDown} Minutes</h5> */}
        </div>
    
        <form onSubmit={handleSubmission} ref={formToSubmit}>
        <div>
        

        {
             Assessment.type === 'short' ?
             <>
            { questions.map((ques, inx) => 
             
             ques.type === "MCQ" ?
                <Question 
                ques={ques}
                inx={inx}
              
                ></Question>
                : 
                <FillInTheGap
                ques={ques}
                inx={inx}
            
                ></FillInTheGap>
            )
          }
            </>
        
             :
             <>
             { questions.map((ques, inx) => 
             <BroadQuestion
             ques={ques}
             inx={inx}
             onFileChange={handleFileChange}
             ></BroadQuestion>)
             }
             </>
        }
       
        </div>

        <div className='d-flex justify-content-center'>
        <button className='btn btn-primary w-25'>Submit</button>
        </div>
        </form>
         </div>
    );
};

export default AssessmentDetalis;