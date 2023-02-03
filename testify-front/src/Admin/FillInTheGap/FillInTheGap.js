import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const FillInTheGap = ({handleInput, index, input}) => {
    return (
        <div className='my-3'>
        <Row>
        <div className="form-outline w-100 mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">{index+1}. Fill in the gap question</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              defaultValue={input?.question
              }
              name='question' 
              type="text" 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
       
     </Row>
     <Row>
      <Col>
      <div className="form-outline  mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Correct Answer</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              defaultValue={input?.rightAnswer
              }
              name='rightAnswer' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
      </Col>
      <Col>
      <div className="form-outline w-50 mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Question Mark</label>
             <input
              type='number'
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              defaultValue={input?.mark
              }
              name='mark' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write question mark'/>
            
           </div>
      </Col>   
     </Row>
       </div>
    );
};

export default FillInTheGap;