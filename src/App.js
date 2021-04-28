import './App.css';
import React, { useReducer } from 'react';

import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterObj from './components/HookCounterObj';
import HookCounterArr from './components/HookCounterArr';

import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import DataFetchingThree from './components/DataFetchingThree';

import ComponentC from './components/context/ComponentC';
import ComponentE from './components/context/ComponentE';

import ReducerCounter from './components/ReducerCounter';
import ReducerCounterTwo from './components/ReducerCounterTwo';
import ReducerCounterThree from './components/ReducerCounterThree';

import RCComponentA from './components/ReducerContext/RCComponentA';
import RCComponentB from './components/ReducerContext/RCComponentB';
import RCComponentC from './components/ReducerContext/RCComponentC';

export const UserContext = React.createContext();
export const PreferencesContext = React.createContext();

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        {/* <UserContext.Provider value={'Aaron'}>
          <PreferencesContext.Provider value={'Coffee'}>
            <ReducerCounterThree />
          </PreferencesContext.Provider>
        </UserContext.Provider> */}
        {/* Count - {count}
        <RCComponentA />
        <RCComponentB />
        <RCComponentC /> */}
        <DataFetchingThree />
      </div>
    </CountContext.Provider>
  );
}

export default App;


// Context - no hooks
// create the React.createContext variable
// wrap the components that need global state in the 
// Context.Provider JSX
// pass the global state value into the "value" prop of the provider
// export the React.createContext variable
// consume the context by importing the variable in your component files
// (Check ComponentF)

// useContext hook - (Check ComponentE)

// multiple context? multiple provider wrappers...
