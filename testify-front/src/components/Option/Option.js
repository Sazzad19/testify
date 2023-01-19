import React from 'react';
import './Option.css'

const Option = ({option,handleChange,correctAnswer}) => {
    return (
        <div className='option-container'>
              <label>
            <input
              type="radio"
              name='option'
              onChange={()=>handleChange(option,correctAnswer)}
            />
            {option}
          </label>
        </div>
    );
};

export default Option;