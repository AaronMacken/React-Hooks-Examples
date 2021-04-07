import React, { useState, useEffect } from 'react';

function HookCounter() {
    const [ count, setCount ] = useState(0);
    const [name, setName] = useState('');

    // acts as a life-cycle method for fn's
    // executes after every render of the component
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`
    // });

    // executes only when count is updated, via the second array param
    // if there's a difference, run the useEffect FN
    useEffect(() => {
        console.log('updating document title');
        document.title = `You clicked ${count} times`
    }, [count]);
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
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={incrementCount}>Hook Count { count }</button>
        </div>
    )
}

export default HookCounter
