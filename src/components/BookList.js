import React, { Component } from "react";
import ABook from "./ABook";


export default class BookList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mtop-50">
          <div className="container">
            <div className="card-columns">
              <ABook />
              <ABook />
              <ABook />
              <ABook />
              <ABook />
              <ABook />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
