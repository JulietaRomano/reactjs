import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import Tarjetas from './components/Cards/cards'
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount initial={0} stock={8} onAdd={1}/>
      <Tarjetas/>
    </div>
  );
}

export default App;
