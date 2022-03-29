import './App.css';
import Pokemon from './components/poke';
import SomeComponent from './components/axiosP';

function App() {
  return (
    <div className="App">
      <Pokemon/>
      <hr></hr>
      <h2>more</h2>
      <SomeComponent/>
    </div>
  );
}

export default App;
