import React from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Question = () => {
return (
    <div>
<div>Questions</div>
<Row className="g-3 mt-5">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Question">
            <Form.Control type="text" placeholder="Question" />
          </FloatingLabel>
        </Col>
        </Row>
        <Row>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Class">
            <Form.Control type="text" placeholder="class" />
          </FloatingLabel>
        </Col>
      </Row>
    </div>


);
}

export default Question;
