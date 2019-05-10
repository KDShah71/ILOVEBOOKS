import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import Sitedetail from "./Sitedetail";
import BookGrid from "./BookGrid";
import Footer from "./Footer";

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
