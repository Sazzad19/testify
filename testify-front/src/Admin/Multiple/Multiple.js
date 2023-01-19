import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Multiple = ({handleInput, index, input}) => {
    return (
        <div>
              <Row>
              <div className="form-outline w-100 mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">{index+1}. Multiple Question</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              value={input.question}
              name='question' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
           </Row>
        <Row className="g-3 mt-1">
        <Col md>
        <div className="form-outline  mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Option 1</label>
             <textarea 
              className="form-control bg-light"
              id="textAreaExample6"
              rows="3"
              value={input.option}
              name='option1'
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your Option 1'>
              </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold"
              htlmfor="textAreaExample6">Option 2</label>
              <textarea 
              className="form-control bg-light" 
              id="textAreaExample6" 
              rows="3" 
              value={input.option}
              onChange={(event) =>handleInput(event,index)}
              name='option2'
              placeholder='write your Option 2'>
             </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Option 3</label>
             <textarea
              name='option3'
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3" 
              value={input.option}
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your Option 3'>
              </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Option 4</label>
              <textarea 
              name='option4'
              className="form-control bg-light"
              onChange={(event) =>handleInput(event,index)}
              id="textAreaExample6" 
              rows="3" 
              value={input.option}
              placeholder='write your Option 4'>
              </textarea>
           </div>
        </Col>
      </Row>
      <Row>
      <Col>
      <div className="form-outline  mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Correct Answer</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              name='correctAns' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
      </Col>
      <Col>
      <div className="form-outline w-50 mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">Question Mark</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              name='questionMark' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write question mark'>
              </textarea>
           </div>
      </Col>   
     </Row>
        </div>
    );
};

export default Multiple;