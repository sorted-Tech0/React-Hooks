import './App.css';
import ContextComponent from './components/Context';
import EffectState from './components/Effect';
import ReducerComponent from './components/Reducer';
import RefComponent from './components/Ref';
import StateComponent from './components/State';

function App() {
  return (
    <div className="App">
      <h1>Hooks-In-Depth!</h1>
      <StateComponent />
      <hr />
      <EffectState />
      <hr />
      <ContextComponent />
      <hr />
      <RefComponent />
      <hr />
      <ReducerComponent />
    </div>
  );
}

export default App;
