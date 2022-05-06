import React from 'react-bootstrap'
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap'
import '../stylesheets/navBar-stylesheet.css'
import { Link } from 'react-router-dom'

let NavBar = () => {
  return (
    <Container fluid className="main-navbar-color-container">
      <Container>
        <Navbar expand="lg" className="navbar-outer">
          <div className="navbar-icon-and-search">
            <Navbar.Brand href="#home">
              <Link to={'/feed'}>
                <i className="bi bi-linkedin linkedin-icon"></i>
              </Link>
            </Navbar.Brand>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <div className="icons-and-texts-together">
                  <Nav.Link href="#home" className="nav-icon-outer">
                    <i className="bi bi-house-door-fill nav-icon"></i>
                  </Nav.Link>
                  <p className="text-under-icon">Home</p>
                </div>
                <div className="icons-and-texts-together">
                  <Nav.Link href="#mynetwork" className="nav-icon-outer">
                    <i className="bi bi-people-fill nav-icon"></i>
                  </Nav.Link>
                  <p className="text-under-icon">My Network</p>
                </div>

                <div className="icons-and-texts-together">
                  <Nav.Link href="#jobs" className="nav-icon-outer">
                    <i className="bi bi-briefcase-fill nav-icon"></i>
                  </Nav.Link>
                  <p className="text-under-icon">Jobs</p>
                </div>
                <div className="icons-and-texts-together">
                  <Nav.Link href="#messaging" className="nav-icon-outer">
                    <i className="bi bi-chat-dots-fill nav-icon"></i>
                  </Nav.Link>
                  <p className="text-under-icon">Messaging</p>
                </div>
                <div className="icons-and-texts-together">
                  <Nav.Link href="#notifications" className="nav-icon-outer">
                    <i className="bi bi-bell-fill nav-icon"></i>
                  </Nav.Link>
                  <p className="text-under-icon">Notifications</p>
                </div>
                <div className="icons-and-texts-together the-me-icon">
                  <Link to={'/profile-page'} className="nav-icon-outer">
                    <i className="bi bi-circle nav-icon"></i>
                    <p className="text-under-icon">Me ▼</p>
                  </Link>
                </div>
              </Nav>
              <div className="the-work-icon">
                <Nav.Link href="#work" className="nav-icon-outer">
                  <i className="bi bi-grid-3x3-gap nav-icon"></i>
                </Nav.Link>
                <p className="text-under-icon">Work ▼</p>
              </div>
              <div className="icons-and-texts-together">
                <Nav.Link href="#profile" className="nav-icon-outer">
                  <i className="bi bi-play-btn-fill nav-icon"></i>
                </Nav.Link>
                <p className="text-under-icon">Learning</p>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Container>
    </Container>
  )
}

export default NavBar
