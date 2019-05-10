import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="ml-auto mr-auto" href="/">
            I <i class="fas fa-heart" /> B<i class="fas fa-book-open" />
            KS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav className="p-2 m-2 ">
                <Link to="/BookList" className="nounderline">
                  BookList
                </Link>
              </Nav>

              <Nav className="p-2 m-2">
                <Link to="/OwnProfile/:id" className="nounderline">
                  Profile{" "}
                </Link>
              </Nav>

              <Nav className="p-2 m-2">
                <Link to="/login" className="nounderline">
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
