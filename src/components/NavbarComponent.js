import React from "react"
import { Link } from "react-router-dom";
import {Nav, Navbar, Container} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#"><strong>Data Siswa API</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 mr-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav><Link className="nav-link" to="/" >Home</Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;