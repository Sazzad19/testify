import React from "react";
import "./FillInTheGap.css";

const FillInTheGap = ({ques,inx, }) => {
  const {question} = ques;
  return (
    <div>
      <div className="question-container">
      <h4>{inx+1}. {question}</h4>
        <div className="options-container">
          <input 
          className="gap-input" 
          type="text" 
           name={`${ques.id}`} 
         />
        </div>
      </div>

    </div>
  );
};

export default FillInTheGap;
