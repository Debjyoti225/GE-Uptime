import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ima from "../../imgs/ge-logo.png"
import { Link } from "react-router-dom";

// import logo from "../../imgs"

function BrandExample() {
  return (
    <>
        <Navbar className="navbar-background" expand="lg" bg="dark" variant="dark" style={{zIndex:"1"}}>
        <Container>
            <Link to="/" style={{textDecoration:"none"}}>
          <Navbar.Brand href="#" style={{fontSize:"1.5rem"}}>
            <img alt="" src={ima} width="55" height="60" className="d-inline-block align-center"/>{'    '}
            GE Healthcare
          </Navbar.Brand>
          </Link>


          <Link className="d-flex" to='/' style={{textDecoration:"none", color:"white", fontSize:"1.3rem", fontWeight:"500"}}>
            Home
          </Link>
        </Container>
      </Navbar>
    </>
    );
}

export default BrandExample;