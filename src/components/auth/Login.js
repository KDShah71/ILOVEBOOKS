import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
     
       
          <div className="mt-5 card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <h4 className="card-title mt-3 text-center">Welcome Back</h4>

              <form>
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
                      <i className="fa fa-lock" />{" "}
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
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
                    <div className="btn btn-warning btn-sm">Sign Up</div>
                  </Link>
                </p>

                <p className="divider-text  text-center">
                  <span className="bg-light">OR</span>
                </p>
                <p>
                  <a href="" className="btn btn-block btn-google">
                    <i className="fab fa-google" /> &nbsp; Login via gmail
                  </a>
                  <a href="" className="btn btn-block btn-facebook">
                    <i className="fab fa-facebook-f" /> &nbsp; Login via
                    facebook
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
