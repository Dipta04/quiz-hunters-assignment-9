import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizreact.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizreact = () => {
    const quizreact= useLoaderData()
    const questions=quizreact.data;
    const question = questions.questions;
    console.log(question);
    const givealert=()=>alert(`${quizreact.data.correctAnswer}`);
    
    const notify = (id) =>{ 
        if(questions.correctAnswer===id)
        {
        toast("correct!");
        }
        else{
            toast('wrong!');
        }
    }
    
    return (
        <div>
            <div>
           {
            question.map(ques=> <div className='quiz-details'>
                <p>{ques.question}</p>
                {
                    ques.options.map(ans=><div>
                    <li onClick={(id)=>notify()}>{ans}</li>
                    <ToastContainer/>
                    </div>
                    )
                }
                <EyeIcon onClick={givealert} className='icon'></EyeIcon>
            </div>)
           }
           </div>
    
        </div>
    );
};

export default Quizreact;