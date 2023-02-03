import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BsDownload } from "react-icons/bs";
const AssessmentMarks = () => {
    const [submission, setSubmission] = useState({})
    const [marks, setMarks] = useState([])
    const navigate = useNavigate();
    let answer;
    let { id } = useParams();
    useEffect( ()=>{
        fetch(`http://localhost:5000/api/submission/details/${id}`,
              {
                method: 'GET',
                headers: {
                  Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data =>{ 
                if(data.success)
                {
                   setSubmission(data.result)
                }
            })
        }, [id]);
    const downloadFile = (fileName) =>{
        fetch(`http://localhost:5000/download/${fileName}`,
        {
          method: 'GET',
      }).then(response =>{
        response.blob().then(blob =>{
            const url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click();
        })
      })
    }
    const handleMark = (event, questionId)=>{
        let markIndex = marks.findIndex(markObject => markObject.questionId == questionId)
        if(markIndex != -1){
            marks[markIndex].mark = event.target.value
            setMarks([...marks])
        }else{
            setMarks([...marks, {questionId, mark: event.target.value}])
        }
    }
    const submitMark = () =>{
        fetch(`http://localhost:5000/api/submission/create-mark/${id}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(marks)
      })
      .then(res => res.json())
      .then(data =>{ 
          if(data.success)
          {
            navigate('/submission');
            toast('Submission Marked Successfully')          }
      })
    }
    // useEffect(()=>{
    //     console.log("marks", marks);
    // },[marks])

    return (
        <div className='mt-4 container'>
            <h2 className='text-center mb-5'>Assessment Marks</h2>
            {submission?.Assessment?.Questions.map((question , index)=>
            <div className='my-3'>
                <h5>{index+1}. {question.question}
               </h5>
                
              {  submission.answers?.find(answer => answer.questionId == question.id)?.type === "file" ? 
                    <p>Anwser <BsDownload onClick={()=>downloadFile(submission.answers?.find(answer => answer.questionId == question.id)?.answer)} style={{cursor: 'pointer', fontSize: '20px'}}></BsDownload></p> : 
                   <p>Answer: {submission.answers?.find(answer => answer.questionId == question.id)?.answer}</p>
              }
                
                <p>Mark: {question.mark}</p>
                <Form.Control style={{width: '200px'}} type="text" placeholder="Mark" onChange={(event)=>handleMark(event, question.id)}/>
            </div>
            )}

            <button onClick={submitMark} className="btn btn-primary" >Submit Mark
            </button>
        </div>
    );
};

export default AssessmentMarks;