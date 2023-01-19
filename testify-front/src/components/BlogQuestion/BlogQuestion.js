import React from 'react';
import './BlogQuestion.css';

const BlogQuestion = ({task}) => {
    const {id ,question,answer} = task;
    return (
        <div className='blog-question-container'>
            <h2>{id}. {question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default BlogQuestion;