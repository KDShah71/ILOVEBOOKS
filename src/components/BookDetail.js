import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Comments from "./Comment";
import BookInfo from "./BookInfo";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

export default class BookDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <BookInfo />

        <h2 className="m-5 mb-4">Recent Comments</h2>

        <Comments />
        <Comments />
        <Comments />
      </React.Fragment>
    );
  }
}
