import React, { Component } from "react";

import Sitedetail from "./Sitedetail";
import BookGrid from "./BookGrid";


export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Sitedetail />
        <BookGrid />
        
      </div>
    );
  }
}
