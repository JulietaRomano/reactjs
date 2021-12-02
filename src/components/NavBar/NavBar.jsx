import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import IconCart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
function NavBar() {
     return (
          <Navbar className='menu'>
               <Container fluid>
                    <Link className="noBlue" to="/">
                         <Navbar.Brand><img src='https://www.clipartmax.com/png/full/456-4568663_logo-clothes-hanger.png' className='logo' alt='logo'></img></Navbar.Brand>                    
                    </Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
               <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
               >
                    <Link className="noBlue navBarTitle" to="/">Inicio</Link>
                    <Link className="noBlue navBarTitle" to="/categoria/pantalones">Pantalones</Link>
                    <Link className="noBlue navBarTitle" to="/categoria/abrigos">Abrigos</Link>
                    <Link className="noBlue navBarTitle" to="/categoria/vestidos">Vestidos</Link>
               </Nav>
                    <Link to='/cart'>
                         <IconCart/>
                    </Link>
               </Navbar.Collapse>
               </Container>
          </Navbar>
     )
}
export default NavBar
