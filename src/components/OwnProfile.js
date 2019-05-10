import React, { Component } from "react";
import Profile from "./Profile";
import CustomNavbar from "./CustomNavbar";
import UserDetails from "./UserDetails";
import ExchangePost from "./ExchangePost";
import PreviousPost from "./PreviousPost";
import Footer from "./Footer";

export default class OwnProfile extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <UserDetails />

          <ExchangePost />
          <PreviousPost />
        </div>
      </div>
    );
  }
}
