import NavBar from './components/NavBar/NavBar'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import ItemListContainer from "./components/Container/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
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
          <Route exact path='/detail' component={ItemDetailContainer}/>
            <ItemCount initial={0} stock={8}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
