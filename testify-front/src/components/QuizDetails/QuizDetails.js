import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import 'react-toastify/dist/ReactToastify.css';
import './QuizDetails.css'
import FillInTheGap from '../FillInTheGap/FillInTheGap';

const QuizDetails = () => {
    const quiz = useLoaderData().data;
    const questions = quiz.questions; 
    const showAnswer= (correctAnswer)=>{
        // toast(correctAnswer);
    };
    function handleChange(value,correctAnswer) {
        if(correctAnswer===value)
        {
            // toast("Correct Answer");
            
        }
        else{
            // toast("Wrong Answer");
        }
      }

    
    return (
        <div className='questions-container'>
            <h1 className='quiz-name'>Quiz of {quiz.name}</h1>
            <div>
            
            {
                questions.map((questionDetails, inx) => 
                <Question 
                inx={inx} 
                key={questionDetails.id}
                 questionDetails ={questionDetails}
                 showAnswer={showAnswer}
                 handleChange={handleChange}
                 ></Question>)
            }
            <FillInTheGap></FillInTheGap>
            </div>
        </div>
    );
};

export default QuizDetails;