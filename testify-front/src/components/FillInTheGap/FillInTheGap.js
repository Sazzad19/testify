import React from "react";
import "./FillInTheGap.css";

const FillInTheGap = () => {
  return (
    <div>
      <div className="question-container">
        <div className="question-header">
          <h4>React is mainly used&nbsp;for _______ (if needed, google it)</h4>
        </div>
        <div className="options-container">
          <input className="gap-input" type="text" />
        </div>
      </div>

      <div className="question-container">
        <div className="question-header">
          <h4>React is mainly used&nbsp;for _______ (if needed, google it)</h4>
        </div>
        <div className="options-container">
          <input className="gap-input" type="text" />
        </div>
      </div>

      <div className="question-container">
        <div className="question-header">
          <h4>React is mainly used&nbsp;for _______ (if needed, google it)</h4>
        </div>
        <div className="options-container">
          <input className="gap-input" type="text" />
        </div>
      </div>
    </div>
  );
};

export default FillInTheGap;
