import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/Container/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount initial={0} stock={8}/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
