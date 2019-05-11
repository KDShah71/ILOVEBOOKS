import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="ml-auto mr-auto navbar-default" href="/">
            I <i className="fas fa-heart" /> B<i className="fas fa-book-open" />
            KS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             <Nav className="p-2 m-2">
              <Link to="/BookList" className="nounderline btn">
                BookList
              </Link>
            </Nav>

              <Nav className="p-2 m-2 ">
                <Link to="/TeamDetail" className="nounderline btn">
                  Team
                </Link>
              </Nav>

              <Nav className="p-2 m-2">
                <Link to="/OwnProfile/:id" className="nounderline btn">
                  Profile{" "}
                </Link>
              </Nav>

              <Nav className="p-2 m-2">
                <Link to="/login" className="nounderline btn">
                  LogIn{" "}
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
