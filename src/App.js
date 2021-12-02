import CartContextProvider from './context/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portada from './components/Carousel/Portada';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Portada/>
              <Switch>
                <Route exact path='/' component={ ItemListContainer }/>
                <Route exact path='/categoria/:categoria' component={ ItemListContainer }/>
                <Route exact path='/item/:itemId' component={ ItemDetailContainer }/>          
                <Route exact path='/cart' component={ Cart }/>
              </Switch>
            <Footer/>
          </BrowserRouter>
        </CartContextProvider>
    </div>    
  );
}
export default App;
