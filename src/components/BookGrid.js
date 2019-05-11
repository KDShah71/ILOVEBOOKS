import React, { Component } from "react";

import ABook from "./ABook";



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
