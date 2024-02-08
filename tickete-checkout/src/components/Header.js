import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { FaShoppingBag, FaQuestionCircle } from 'react-icons/fa';

function Header(props) {
  const headerStyle = {
    width: '100%', // Full width for mobile view
    height: '46px', // Hug height
    display: 'flex',
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center vertically
  };

  return (
    <Navbar expand="lg" className="bg-light" style={headerStyle}>
      <Container>
        <Navbar.Brand href="#" className="text-dark font-weight-bold" style={{ fontSize: '2rem', width: '126.55px' }}>
          tickete
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">
            <Nav.Link href="#" className="text-dark">
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
