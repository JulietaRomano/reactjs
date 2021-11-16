import {Navbar, Nav,Container} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#home" className="logo">Juanita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto menu">
                <Link to='/'>
                  <Nav className='navItem'>Inicio</Nav>
                </Link>
                <Link to='categoria/abrigos'>
                  <Nav className='navItem'>Abrigos</Nav>
                </Link>
                <Link to='categoria/pantalones'>
                  <Nav className='navItem'>Pantalones</Nav>
                </Link>
                <CartWidget/>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;