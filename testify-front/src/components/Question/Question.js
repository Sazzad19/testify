
import './Question.css'

const Question = ({ques,inx,setAnswer,createAnswer}) => {
    const {question, options} = ques ;
   

   
  
    return (
        <div className='question-container'>
            <div className='question-header'>
            <h4>{inx+1}. {question}</h4>
         
           
            </div>
            <div className='options-container'>
                <div className='option-container'>
              <label>
               <input
              type="radio"
              name='option'
              value='a'
              onChange={(e) => createAnswer(e.target.value, ques.id)}
               />
               {options.a}
             </label>
                 </div>
                <div className='option-container'>
              <label>
               <input
              type="radio"
              name='option'
              value='b'
              onChange={(e) => createAnswer(e.target.value, ques.id)}
               />
               {options.b}
             </label>
                 </div>
                <div className='option-container'>
              <label>
               <input
              type="radio"
              name='option'
              value='c'
              onChange={(e) => createAnswer(e.target.value, ques.id)}
               />
               {options.c}
             </label>
                 </div>
                <div className='option-container '>
              <label>
               <input
              type="radio"
              name='option'
              value='d'
              onChange={(e) => createAnswer(e.target.value, ques.id)}
               />
               {options.d}
             </label>
                 </div>
            </div>
        </div>
    );
};

export default Question;