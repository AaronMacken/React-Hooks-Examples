import React, { useState } from 'react';
import HookMouse from './HookMouse';

// The problem with conditionally rendering the hookmouse component
// is that react will still try to use it's window event listener
// to update state

// Cancel all subscriptions and listeners - ClassMouse.js / HookMouse.js
// We need to clean up after our component using componentWillUnmount

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)} >Toggle Display</button>
            { display && <HookMouse /> }
        </div>
    )
}

export default MouseContainer
