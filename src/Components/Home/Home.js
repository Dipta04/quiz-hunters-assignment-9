import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData();
    const quizses=quizs.data;
    return (
        <div>
            {
                quizses.map(quiz=><Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;