import './App.css';
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

function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

export default App;
