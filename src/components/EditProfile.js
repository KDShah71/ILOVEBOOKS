import React, { Component } from "react";


export default class EditProfile extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="container user-edit">
          <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <h2 className="card-title mt-3 text-center">Profile Edit</h2>

              <form>
                <div className="file-field mb-3">
                  <div className="z-depth-1-half mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                      className="img-fluid"
                      alt="example placeholder"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-mdb-color btn-rounded float-left">
                      <span>Upload Profile Picture</span>
                      <input type="file" />
                    </div>
                  </div>
                </div>

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
                      <i class="fas fa-location-arrow" />{" "}
                    </span>
                  </div>

                  <input
                    name=""
                    className="form-control"
                    placeholder="Address"
                    type="text"
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-book" />{" "}
                    </span>
                  </div>

                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Favourite Books"
                    row="1"
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fas fa-feather-alt" />{" "}
                    </span>
                  </div>

                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Favourite Writer"
                    row="1"
                  />
                </div>

                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fas fa-tree" />{" "}
                    </span>
                  </div>

                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Hobbies"
                    row="1"
                  />
                </div>

                <div className=" form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-info-circle" />{" "}
                    </span>
                  </div>

                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Description"
                    type="text"
                    row="3"
                  />
                </div>

                <div className="form-group ">
                  <button type="submit" className="btn btn-primary btn-block">
                    Edit Profile
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
        <div id="emptySpace"> </div>
       
      </React.Fragment>
    );
  }
}
