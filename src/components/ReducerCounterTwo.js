import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {

    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };

        case 'incrementTwo':
            return { ...state, secondCounter: state.secondCounter + action.value };
        
        case 'decrementTwo':
            return { ...state, secondCounter: state.secondCounter - action.value };

        case 'reset': 
            return initialState;

        default:
            return state;
    }
};

function ReducerCounterTwo() {

    // since the state & behavior is the same, it can be easier to just
    // define a second reducer - see ReducerCounterThree.js
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <hr />
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'incrementTwo', value: 1})}>Increment Counter 2</button>
            <button onClick={() => dispatch({type: 'decrementTwo', value: 1})}>Decrement Counter 2</button>
        
            <hr />
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCounterTwo;
