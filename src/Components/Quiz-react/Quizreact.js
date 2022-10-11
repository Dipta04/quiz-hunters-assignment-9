import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizreact.css'

const Quizreact = () => {
    const quizreact= useLoaderData()
    const questions=quizreact.data;
    const question = questions.questions;
    console.log(question);
    return (
        <div>
            <div>
           {
            question.map(ques=> <div className='quiz-details'>
                <p>{ques.question}</p>
                {
                    ques.options.map(ans=><li>{ans}</li>)
                }
            </div>)
           }
           </div>
        </div>
    );
};

export default Quizreact;