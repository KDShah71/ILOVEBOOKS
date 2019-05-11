import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
            <h4 className="card-title mt-3 text-center">Welcome Back</h4>

            <form onSubmit={this.onSubmit}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-envelope" />{" "}
                  </span>
                </div>
                <input
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-lock" />{" "}
                  </span>
                </div>
                <input
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  LogIn
                </button>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/register">
                  <button className="btn btn-warning btn-sm">Sign Up</button>
                </Link>
              </p>

              <p className="divider-text  text-center">
                <span className="bg-light">OR</span>
              </p>
              <p>
                <a href="#top" className="btn btn-block btn-google">
                  <i className="fab fa-google" /> &nbsp; Login via gmail
                </a>
                <a href="#top" className="btn btn-block btn-facebook">
                  <i className="fab fa-facebook-f" /> &nbsp; Login via facebook
                </a>
              </p>
            </form>
          </article>
        </div>
        <div id="emptySpace"> </div>
      </React.Fragment>
    );
  }
}
