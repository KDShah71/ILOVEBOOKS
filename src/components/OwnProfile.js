import React, { Component } from "react";

import UserDetails from "./UserDetails";
import ExchangePost from "./ExchangePost";
import PreviousPost from "./PreviousPost";

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
