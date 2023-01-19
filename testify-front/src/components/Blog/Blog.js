import React from 'react';
import BlogQuestion from '../BlogQuestion/BlogQuestion';
import './Blog.css'
const questions = [
    {
        id:1,
        question:'What is purpose of react router?' ,
        answer: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.'
    },
    {
        id:2,
        question:'How does context api work in react js?' ,
        answer: 'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.'
    },
    {
        id:3,
        question:'What is useRef? Work of useRef.' ,
        answer: ` useRef is like a “box” that can hold a mutable value in its .current property.
        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
        .`
    }
]

const Blog = () => {
    return (
        <div className='blog-container'>
           {
             questions.map(task => <BlogQuestion
             key={task.id}
             task= {task}
             ></BlogQuestion>)
           }
        </div>
    );
};

export default Blog;