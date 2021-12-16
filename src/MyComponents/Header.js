import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Notes Web-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>

            {props.searchbar ?
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
              </Form> : ""
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

Header.defaultProps = {
  title: "Note App"
}

Header.prototype = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}