import React from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


const SelectOption = ({optionSelect, index}) => {

  
  return (
    <div>
      <Row className="my-3 w-50">
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Select Your Question option"
          >
            <Form.Select
              onInput={(event)=>optionSelect(event, index)}
              aria-label="Floating label select example"
            >
              <option>Open this select menu</option>
              <option value="MCQ">Multiple Question</option>
              <option value="FIG">Fill in the gap</option>
              <option value="FS">File Submission</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

     
    </div>
  );
};

export default SelectOption;
