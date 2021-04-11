import './App.css';
import React from 'react';

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

import ComponentC from './components/context/ComponentC';
import ComponentE from './components/context/ComponentE';

export const UserContext = React.createContext();
export const PreferencesContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Aaron'}>
        <PreferencesContext.Provider value={'Coffee'}>
          <ComponentE />
        </PreferencesContext.Provider>
      </UserContext.Provider>
    </div>
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
