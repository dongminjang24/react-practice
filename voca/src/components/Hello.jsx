import React from 'react';
import World from './World';
const Hello = () => {
    return (
        <React.Fragment>
            <h1 style={{
                color:"#06f",
                borderRight:'2px solid #000',
                marginBottom: "50px",
                opacity:1

            }}>Hello</h1>
            <World/>
        </React.Fragment>
    );
};

export default Hello;