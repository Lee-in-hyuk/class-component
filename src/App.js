import Hello from './components/Hello';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Hello  color="red"/>
      <Counter/>
    </div>
  );
}

export default App;
