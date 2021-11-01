import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Tarjetas from './components/cards/cards'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tarjetas/>
    </div>
  );
}

export default App;
