import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What is the purpose of React router?</h2>
            <p><small>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</small></p>
            <h2>How does Context-API work?</h2>
            <p><small>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</small></p>
            <h2>What is useRef hook in react?</h2>
            <p><small>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.useRef() only returns one item.When we initialize useRef we set the initial value: useRef(0).</small></p>
        </div>
    );
};

export default Blog;