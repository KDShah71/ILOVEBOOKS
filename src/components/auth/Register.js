import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    // axios
    //   .post("/api/useers/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err =>
    //     this.setState({
    //       errors: err.response.data
    //     })
    //   );
  }

  render() {
    const { errors } = this.state;

    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <div className="card register-page bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
              <a href="#top" className="btn btn-block btn-google">
                <i className="fab fa-google" /> &nbsp; Login via Gmail
              </a>
              <a href="#top" className="btn btn-block btn-facebook">
                {" "}
                <i className="fab fa-facebook-f" /> &nbsp; Login via facebook
              </a>
            </p>
            <p className="divider-text text-center">
              <span className="bg-light ">OR</span>
            </p>

            <form onSubmit={this.onSubmit}>
              {/* Name */}
              <div
                className={classnames("form-group input-group", {
                  "is-invalid": errors.name
                })}
              >
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-user" />{" "}
                  </span>
                </div>
                <input
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div
                className={classnames("form-group input-group", {
                  "is-invalid": errors.email
                })}
              >
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
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* password1 */}
              <div
                className={classnames("form-group input-group", {
                  "is-invalid": errors.password
                })}
              >
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
                  placeholder="Create password"
                  type="password"
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* password2 */}
              <div
                className={classnames("form-group input-group", {
                  "is-invalid": errors.password2
                })}
              >
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-lock" />{" "}
                  </span>
                </div>
                <input
                  name="password2"
                  value={this.state.password2}
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                  onChange={this.onChange}
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-warning btn-block">
                  Create Account
                </button>
              </div>
              <p className="text-center">
                Have an account?
                <Link to="/Login">
                  <button className="m-2 btn btn-sm btn-primary">Log In</button>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
