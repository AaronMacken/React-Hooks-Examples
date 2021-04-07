import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    // pass an empty array so the effect is only used once
    // (like component did mount)
    // useEffect's function can also return a function
    // this returned function will act as the clean up function
    // (ComponentWillUnmount)
    useEffect(() => {
        console.log('use effect called');
        window.addEventListener('mousemove', logMousePosition);
        
        // clean up function
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            Hooks X - { x } Y - { y }
        </div>
    )
}

export default HookMouse
