// 1. Create a Counter Component.

/*
Problem: Create a simple counter component that increases or decreases the count when clicking buttons.
*/

// Solution

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)} >Decrease</button>
        </div>
    );
};