import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import ExchangePost from "./ExchangePost";

export default class EditPost extends Component {
  render() {
    return (
      <React.Fragment>
        <ExchangePost />

        <div id="extraSpace" />
      </React.Fragment>
    );
  }
}
