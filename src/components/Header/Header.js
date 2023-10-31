import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css';

function Header() {
  const current = new Date();
  const date = `Today is: ${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

  return (
    <div>
      <p className="mx-auto w-100 text-center mb-0 alert-message">New Design Coming Soon!</p>
      <header className="header d-flex align-items-center p-5">
        <Navbar className="me-auto">
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/images/resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar>
        <p className="date mb-0">{date}</p>
      </header>
    </div>
  );
}

export default Header;
