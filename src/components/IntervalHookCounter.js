import React, { useState, useEffect } from 'react'

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    // since we are using prevCount in the function above,
    // we do not need to specify count in the dependency list
    // otherwise, if we were setting state based off of count
    // we would need to specify it

    return (
        <div>
            {count}
        </div>
    )
}
