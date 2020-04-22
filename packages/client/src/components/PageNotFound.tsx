import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/PageNotFound.css";

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <div className="cover-image-container flex-container flex-col flex-horizontal-center flex-vertical-center">
          <div className="app-content">
            <div className="dark-container">
              <h1>404: Page Not Found</h1>
              <p>
                Yikes! You have navigated into uncharted waters with no land in
                sight.
              </p>
              <p>Let's hurry back home!</p>
              <Link to="/">Go home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
