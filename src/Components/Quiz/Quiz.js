import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name,logo,total} =quiz;
    return (
        <div className='quiz-container'>
            <img src={logo} alt="" />
            <h5>Name:{name}</h5>
            <h5>total quiz:{total}</h5>
        </div>
    );
};

export default Quiz;