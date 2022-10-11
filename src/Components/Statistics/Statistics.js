import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const stata=useLoaderData();
    const statis=stata.data;
    return (
        <div className='statistics'>
            <LineChart width={300} height={200} data={statis}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;