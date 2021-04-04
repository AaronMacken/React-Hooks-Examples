import React, { useState } from 'react';

function HookCounter() {
    const [ count, setCount ] = useState(0);
    
    // unsafe, if using for loop & calling
    // setCount 5 times, will not render correctly
    // const incrementCount = () => {
    //     setCount(count + 1);
    // }

    // if new state relies on old state,
    // always pass in a FN that uses prevState
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    return (
        <div>
            <button onClick={incrementCount}>Hook Count { count }</button>
        </div>
    )
}

export default HookCounter
