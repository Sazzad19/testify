import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../../Context/UserProvider/UserProvider';
import FillInTheGap from '../../FillInTheGap/FillInTheGap';
import Question from '../../Question/Question';
import BroadQuestion from '../BroadQuestion/BroadQuestion';


const AssessmentDetalis = () => {
 
    const [Assessment, setAssessment] =  useState({});
    const [questions, setQuestions] =  useState([]);
    const {user} = useContext(UserContext);

    let { id } = useParams();
  
    const subject = Assessment?.subject;
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

    const handleSubmission = (event)=>{
      event.preventDefault();
      const answers = [];

        const form = event.target;
        const data = new FormData(form)
        
        for(let name of data.keys()){
          answers.push({questionId: name, answer: data.get(name)})
        }
        console.log('array', answers)

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
      toast('Submission successFully')
      console.log('submission', data)
    }
  })

    }

    // const createAnswer = (answer, quesId)=>{
    //   if(answer){
    //     setAnswer([...answer, {questionId: quesId, answer: answer}])
    //   }
    //   else{
    //     setAnswer(answer.filter(ans => ans.id !== quesId))
    //   }
    // }
    return (
        <div className='questions-container my-5'>
        <h1 className='quiz-name'>{subject}</h1>
        <form onSubmit={handleSubmission}>
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