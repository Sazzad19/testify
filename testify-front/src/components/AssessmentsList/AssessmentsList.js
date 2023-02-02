import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const AssessmentsList = () => {

  const [assessments, setAssessments] = useState([]);
  
  useEffect( ()=> {
    fetch('http://localhost:5000/api/assessment/list',
    {
      method: 'GET',
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
  })

    .then(res => res.json())
     .then(data => 
      {console.log('assessment list', data)
      setAssessments(data.result)
    })
  }, [])
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
        {
          assessments.map((assessment , index)=>
            <tr key={index}>
            <td>{index+1}</td>
            <td>{assessment.name}</td>
            <td>{assessment.questionCount}</td>
            <td>{assessment.totalMarks}</td>
            <td>
              <Link to={`/assessments/edit/${assessment.id}`}>
              <button className='btn btn-primary'>Edit</button>
              </Link>
              </td>
          </tr>
            )
        }
 
     
      </tbody>
    </Table>
           </div>
        </div>
    );
};

export default AssessmentsList;