import React, { useEffect, useState } from 'react';
import AssessmentsCart from '../../AssessmentsCart/AssessmentsCart';
import './StudentAssessment.css'

const StudentAssessment = () => {
    const [courseCarts, setCourseCarts] = useState([]);
    useEffect( ()=> {
        fetch('http://localhost:5000/api/assessment/list',
        {
          method: 'GET',
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
      })
    
        .then(res => res.json())
        .then(data => {
            setCourseCarts(data.result);
            })
      }, [])
    return (
        <div className='container'>
            <h2 className='my-4  text-center'>Assessments List</h2>
            <div className='carts-container'>
                {
               courseCarts.map(cart => <AssessmentsCart 
                cart={cart}
                key={cart.id}
                ></AssessmentsCart>)
                
            }
              </div>
           
        </div>
    );
};

export default StudentAssessment;