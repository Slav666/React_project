import React from 'react';

const persons = (props) => {
    return (
        <div>
    <p>I am {props.name} and I am {props.age}  X years old!</p>
    <p>{props.children}</p>
    </div>
    )
}

export default persons; 
