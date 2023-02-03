import React from 'react';
import Form from 'react-bootstrap/Form';

const AssessmentMarks = () => {
    return (
        <div className='mt-4 container'>
            <h2 className='text-center mb-5'>Assessment Marks</h2>
            <div className='my-3'>
                <h5>1. If 5 ounces is equal to 140 grams, then 2 pounds of ground meat is equal to how many grams?
               </h5>
                <p>Answer: Jimmy made a 15% profit on the sale of a custom designed boat, and the original cost of the boat was $15,000. The boat sold for how much?</p>
                <Form.Control style={{width: '200px'}} type="text" placeholder="Mark" />
            </div>
        </div>
    );
};

export default AssessmentMarks;