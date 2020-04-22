import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="cover-image-container">
          <div className="app-content flex-container flex-col flex-horizontal-center flex-vertical-center">
            <h1 className="title">Sentiments Bot</h1>
            <div className="search-container flex-container flex-col flex-horizontal-center flex-vertical-center">
              <form className="flex-container flex-col flex-horizontal-center flex-vertical-center">
                <input
                  type="text"
                  name="stock-name"
                  autoComplete="off"
                  placeholder="Stock name"
                ></input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <Link to="/about">What is this?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
