import {Navbar, Nav,Container} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Juanita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home">Inicio</Nav.Link>
                <Link to='/'>
                  <Nav.Link href="/">Shop</Nav.Link>
                </Link>
                <Link to='categoria/abrigos'>
                  <Nav.Link href="abrigos">Abrigos</Nav.Link>
                </Link>
                <Link to='categoria/pantalones'>
                  <Nav.Link href="pantalones">Pantalones</Nav.Link>
                </Link>
                <Link to='detail'>
                  <Nav.Link href="detail">Detalle</Nav.Link>
                </Link>
                <CartWidget/>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;