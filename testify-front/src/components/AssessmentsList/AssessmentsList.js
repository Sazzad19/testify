import React from 'react';
import Table from 'react-bootstrap/Table';

const AssessmentsList = () => {
    return (
        <div className='container'>
            <h2 className='my-4  text-center'>Assessments List</h2>
           <div className='my-5'>
           <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Assessment Name</th>
          <th>Question Count</th>
          <th>Total Marks</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
           </div>
        </div>
    );
};

export default AssessmentsList;