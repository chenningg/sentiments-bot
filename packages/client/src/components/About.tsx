import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="app-content">
          <h1>About</h1>
          <p>
            Sentiments Bot is an application that allows you to find out the
            market sentiments for a particular stock. By keying in a stock name,
            it will scour data sources such as Twitter and news articles to
            determine market sentiments through a Natural Language Processing
            model to give you suggestions as to whether the stock is a good buy
            or sell.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
