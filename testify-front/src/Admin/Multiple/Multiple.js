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
              defaultValue={input.question}
              name='question' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
           </Row>
        <Row className="g-3 mt-1">
        <Col md>
        <div className="form-outline  mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">a</label>
             <textarea 
              className="form-control bg-light"
              id="textAreaExample6"
              rows="3"
              defaultValue={input?.options?.a}
              name='option1'
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your Option a'>
              </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold"
              htlmfor="textAreaExample6">b</label>
              <textarea 
              className="form-control bg-light" 
              id="textAreaExample6" 
              rows="3" 
              onChange={(event) =>handleInput(event,index)}
              name='option2'
              defaultValue={input?.options?.b}
              placeholder='write your Option b'>
             </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">c</label>
             <textarea
              name='option3'
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3" 
              defaultValue={input?.options?.c}
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your Option c'>
              </textarea>
           </div>
        </Col>
        <Col md>
        <div className="form-outline mb-4">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">d</label>
              <textarea 
              name='option4'
              className="form-control bg-light"
              onChange={(event) =>handleInput(event,index)}
              id="textAreaExample6" 
              rows="3" 
              defaultValue={input?.options?.d}
              placeholder='write your Option d'>
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
              defaultValue={input.rightAnswer} 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your answer'>
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
              defaultValue={input.mark
              }
              name='questionMark' 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write question mark'/>
             
           </div>
      </Col>   
     </Row>
        </div>
    );
};

export default Multiple;