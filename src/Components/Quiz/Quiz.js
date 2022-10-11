import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name,logo,total,id} =quiz;
    return (
        <div className='quiz-container'>
            <img src={logo} alt="" />
            <h5>Name:{name}</h5>
            <h5>total quiz:{total}</h5>
            <Link to={`/name/${id}`}>
            <button>Lets start</button>
            </Link>
        </div>
    );
};

export default Quiz;