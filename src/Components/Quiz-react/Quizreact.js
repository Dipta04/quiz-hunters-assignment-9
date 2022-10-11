import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizreact.css'

const Quizreact = () => {
    const quizreact= useLoaderData()
    const questions=quizreact.data;
    const question = questions.questions;
    console.log(question);
    return (
        <div className='quiz-details'>
            <div>
           {
            question.map(ques=> <div>
                <p>{ques.question}</p>
                
            </div>)
           }
           </div>
        </div>
    );
};

export default Quizreact;