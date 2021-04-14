import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {

    switch(action) {
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;

        case 'reset': 
            return initialState;

        default:
            return state;
    }
};

function ReducerCounter() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCounter;

// similar to redux,
// create a reducer function & initial state
// destruct your state & dispatch from useReducer(reducerFn, initialState)

// dispatch calls the function with the action we provide
// the initialState is used in our reducer