import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const FillInTheGap = ({handleInput, index}) => {
    return (
        <div className='my-3'>
        <Row>
        <div className="form-outline w-100 mb-2 mt-3">
              <label className="form-label fw-bold" htlmfor="textAreaExample6">{index+1}. Fill in the gap question</label>
             <textarea
              className="form-control bg-light" 
              id="textAreaExample6"
              rows="3"
              name='question' 
              type="text" 
              onChange={(event) =>handleInput(event,index)}
              placeholder='write your question'>
              </textarea>
           </div>
        {/* <Col>
        <FloatingLabel controlId="floatingInputGrid" label="Fill in the gap question">
           <Form.Control 
           name='question'
           type="text"
           onChange={(event) =>handleInput(event,index)}
           placeholder="Write your question" />
         </FloatingLabel>
         </Col> */}
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

export default FillInTheGap;