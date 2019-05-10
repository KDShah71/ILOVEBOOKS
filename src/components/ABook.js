import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ABook extends Component {
  render() {
    return (
      <div class="card">
        <img
          class="card-img-top"
          src="https://dummyimage.com/640x4:3/"
          alt=""
        />
        <div class="card-body">
          <h4 class="card-title">
            <strong>Book title</strong>
          </h4>

          <h5>Writer: NameofWriter</h5>
          <hr />
          <Link to="/User/:Id">
            <strong>Author-Name</strong>
          </Link>

          <p class="card-text">
            {" "}
            Description by the poster and bla bla in short to be seen
            here.Actually content is a little longer so More Details will take
            to the detail page.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <div class="d-flex justify-content-around">
              <div class="p-2">
                <span>
                  {" "}
                  <i class="far fa-2x fa-comment " /> 54
                </span>{" "}
                Comments
              </div>
              <Link to="/View/:Id">
                <div class="p-2">
                  <div className="btn btn-secondary btn-info">Details</div>
                </div>
              </Link>
            </div>
          </small>
        </div>
      </div>
    );
  }
}
