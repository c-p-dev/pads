import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar, NavDropdown, Button, FormControl, Form, Nav } from 'react-bootstrap';
import './header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <Navbar bg="nav-pink">
                <Navbar.Brand href="#home"  className="text-white" >Test App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="text-white" >Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


