import React from "react";
import "./FillInTheGap.css";

const FillInTheGap = ({ques,inx, setAnswer, createAnswer}) => {
  const {question} = ques;
  return (
    <div>
      <div className="question-container">
      <h4>{inx+1}. {question}</h4>
        <div className="options-container">
          <input className="gap-input" type="text" onChange={(e)=>createAnswer(e.target.value,ques.id)} />
        </div>
      </div>

    </div>
  );
};

export default FillInTheGap;
