import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { FaShoppingBag, FaQuestionCircle } from 'react-icons/fa';

function Header(props) {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
       
        <Navbar.Brand href="#" className="" bg="secondary" style={{fontWeight:'2rem', fontSize:'2rem'}}>
          tickete
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#">
              <FaShoppingBag size={15} className='mx-2' />
              Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Help Icon on the Right */}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#" className="text-dark">
              Help
              <FaQuestionCircle className="mx-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
