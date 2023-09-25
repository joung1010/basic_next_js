'use client';
import React, {useState} from 'react';

function Counter() {
    console.log('Hello!! Client Component')
    const [count, setCount] = useState(0);
    return (
        <>
            <p>{count}</p>
            <button onClick={() => {setCount(num => num + 1);}}>증가+</button>
        </>
    );
}

export default Counter;