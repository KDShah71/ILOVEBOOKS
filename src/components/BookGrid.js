import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ABook from "./ABook";

import Login from "./auth/Login";
import Register from "./auth/Register";
import BookDetail from "./BookDetail";
import Profile from "./Profile";

export default class BookGrid extends Component {
  render() {
    return (

      
      <React.Fragment>
      
          <div className="container mt-5 card-columns">
            <ABook />
            <ABook />
            <ABook />
            <ABook />
            <ABook />
            <ABook />
            </div>
        </React.Fragment>

        
    
    );
  }
}
