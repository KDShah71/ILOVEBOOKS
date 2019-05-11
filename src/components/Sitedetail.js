import React, { Component } from "react";

import { Link } from "react-router-dom";


export default class Sitedetail extends Component {
  render() {
    return (
      <div className=" mb-5 mt-5">
        <div className="jumbotron mt-0">
          <div className="container mt-0 text-center">
            <h2 className="mb-3 ">
              <strong>I LOVE BOOKS</strong>
            </h2>

            <h3 className="mb-4 text-center">
              Made with Love by BookLovers for BookLovers
            </h3>

            <Link to="/BookList">
              <button className="btn btn-warning btn-lg">Explore Books</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
