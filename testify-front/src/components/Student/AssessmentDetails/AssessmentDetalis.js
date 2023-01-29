import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../Context/UserProvider/UserProvider';
import FillInTheGap from '../../FillInTheGap/FillInTheGap';
import Question from '../../Question/Question';


const AssessmentDetalis = () => {
 
    const [Assessment, setAssessment] =  useState({});
    const [questions, setQuestions] =  useState([]);
    const [answer, setAnswer] = useState([]);
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

    const handleSubmission = ()=>{
      const submissionInfo = {
        UserId: user.id,
        AssessmentId: questions.AssessmentId,
        answers: [
          {questionId: questions.id,
          answer: answer
          }
      ]
        }

        console.log('submission info',user.result.id)
  
  //   fetch('http://localhost:5000/api/signin',{
  //     method: 'POST',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(loginInfo)
  // })
  // .then(res => res.json())
  // .then(data =>{
  // localStorage.setItem('token', data.token);
  // })
    }

    const createAnswer = (answer, quesId)=>{
      if(answer){
        setAnswer([...answer, {questionId: quesId, answer: answer}])
      }
      else{
        setAnswer(answer.filter(ans => ans.id !== quesId))
      }
    }
    return (
        <div className='questions-container my-5'>
        <h1 className='quiz-name'>{subject}</h1>
        <div>
        

        {
             Assessment.type === 'short' ?
             <>
            { questions.map((ques, inx) => 
             
             ques.type === "MCQ" ?
                <Question 
                ques={ques}
                inx={inx}
                setAnswer={(answer, quesId)=> createAnswer(answer, quesId)}
                ></Question>
                : 
                <FillInTheGap
                ques={ques}
                inx={inx}
                setAnswer={(answer, quesId)=> createAnswer(answer,quesId)}
                ></FillInTheGap>
            )
          }
            </>
        
             :
             <></>
        }
       
        </div>

        <div className='d-flex justify-content-center'>
        <button onClick={handleSubmission} className='btn btn-primary w-25'>Submit</button>
        </div>
    </div>
    );
};

export default AssessmentDetalis;