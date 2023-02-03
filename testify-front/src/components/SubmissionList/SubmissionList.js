import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const SubmissionList = () => {
  const [submissions, setSubmissions] =  useState([]);
  const {user} = useContext(UserContext)

  useEffect(()=>{
    fetch('http://localhost:5000/api/submission/list',
    {
      method: 'GET',
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
  })
  .then(res => res.json())
  .then(data =>{ 
    setSubmissions(data.result)
      console.log(data)
  })
  },[])
    return (
        <div className='container'>
        <h2 className='my-4  text-center'>  {
           user && user.type === 'student' ? 'Marks' :'Submission List'
          }</h2>
       <div className='my-5'>
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Assessment Name</th>
      {user && user?.type === 'teacher' && <th>Student Name</th>}
      <th>Date</th>
      <th> Marks</th>
    </tr>
  </thead>
  <tbody>
    {
      submissions.map((submission, i)=>
      <tr key={i}>
      <td>{i+1}</td>
      <td>{submission.Assessment.name}</td>
      {user && user?.type === 'teacher' && <th>{submission.User.name}</th>}
      <td>{new Date(submission.createdAt).toLocaleDateString()}</td>
      <td>{submission.obtainedMarks ? submission.obtainedMarks : user?.type === 'teacher' ? <Link to={`assessmentsMark/${submission.id}`}><button className='btn btn-primary'>Mark Now</button></Link>: 'Due to Mark'}</td>

    </tr>
      )
    }
   
 
  </tbody>
</Table>
       </div>
    </div>
    );
};

export default SubmissionList;