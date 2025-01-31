import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './HomeNavbar.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomeNavbar() {
  const location = useLocation();

  return (
    <>
      <Nav className='custom-navbar fixed-top'>
        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex'>
            <Navbar.Brand className="brand-text">Codeworld</Navbar.Brand>
          </div>
          <div className='d-flex'>
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}><b>Home</b></Nav.Link>
            {/* <Nav.Link as={Link} to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}><b>Collections</b></Nav.Link> */}

            <Dropdown>
              <Dropdown.Toggle className="nav-link dropdown-toggle" as={Nav.Link}>
                <b>Collections</b>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/collections/books">Books</Dropdown.Item>
                <Dropdown.Item as={Link} to="/collections/courses">Courses</Dropdown.Item>
                <Dropdown.Item as={Link} to="/collections/articles">Articles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}><b>About</b></Nav.Link>
            <Nav.Link as={Link} to="/courses" className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}><b>Courses</b></Nav.Link>
            {/* <Nav.Link as={Link} to="/admin/login" className={`nav-link ${location.pathname === '/admin/login' ? 'active' : ''}`}><b>Administrator</b></Nav.Link> */}
          </div>
          <div className='d-flex'>
            {/* <Nav.Link as={Link} to="/user-login" className={`nav-link ${location.pathname === '/user-login' ? 'active' : ''}`}><b>User</b></Nav.Link> */}
            <Nav.Link as={Link} to="/user-login" className={`nav-link ${location.pathname === '/user-login' ? 'active' : ''}`}>
              <i className="bi bi-person-fill user-icon"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-login" className={`nav-link ${location.pathname === '/user-login' ? 'active' : ''}`}>
              <i className="bi bi-search"></i>
            </Nav.Link>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default HomeNavbar;
