import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData();
    const quizses=quizs.data;
    return (
        <div>
            <div className='home-header'>
            <img src="https://thumbs.dreamstime.com/b/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg" alt="" />
            <h2>Let's Try Some Quiz</h2>
            </div>
            <div className='div-header'>
            {
                quizses.map(quiz=><Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Home;