import NavBar from './components/NavBar/NavBar'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import ItemListContainer from "./components/Container/ItemListContainer"
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/categoria/:categoriaID' component={ItemListContainer}/>
          <Route exact path='/detail/:productoID' component={ItemDetailContainer}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
