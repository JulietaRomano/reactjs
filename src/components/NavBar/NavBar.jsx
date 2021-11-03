import {Navbar, Nav,Container} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Juanita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">New Arrivals</Nav.Link>
                <Nav.Link href="#link">Shop</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <CartWidget/>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;