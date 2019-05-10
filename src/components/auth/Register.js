import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer";

export default class Register extends Component {
  render() {
    return (
      <React.Fragment>
        
          <div className="card mt-5 bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <h4 className="card-title mt-3 text-center">Create Account</h4>
              <p className="text-center">Get started with your free account</p>
              <p>
                <a href="" className="btn btn-block btn-google">
                  <i className="fab fa-google" /> &nbsp; Login via Gmail
                </a>
                <a href="" className="btn btn-block btn-facebook">
                  {" "}
                  <i className="fab fa-facebook-f" /> &nbsp; Login via facebook
                </a>
              </p>
              <p className="divider-text text-center">
                <span className="bg-light ">OR</span>
              </p>
              <form>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user" />{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    className="form-control"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    className="form-control"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-phone" />{" "}
                    </span>
                  </div>

                  <input
                    name=""
                    className="form-control"
                    placeholder="Phone number"
                    type="text"
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
                    className="form-control"
                    placeholder="Create password"
                    type="password"
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
                    className="form-control"
                    placeholder="Repeat password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-warning btn-block">
                    Create Account
                  </button>
                </div>
                <p className="text-center">
                  Have an account?
                  <Link to="/Login">
                    <button className="m-2 btn btn-sm btn-primary">
                      Log In
                    </button>
                  </Link>
                </p>
              </form>
            </article>
          </div>
       
        <div id="emptySpace"> </div>
        
      </React.Fragment>
    );
  }
}
