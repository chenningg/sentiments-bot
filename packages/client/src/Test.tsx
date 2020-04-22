import React, { Component } from "react";
import axios from "axios";

interface MyState {
  test: string;
}

interface MyProps {}

class Test extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      test: "???",
    };
  }

  handleClick = async () => {
    const res = await axios.get("/api/v1/test");
    console.log(res);
    this.setState({
      test: res.data.weather,
    });
  };

  render() {
    return (
      <>
        <h1>Test page!</h1>
        <p>The weather now is: {this.state.test}</p>
        <button onClick={this.handleClick}>Get data</button>
      </>
    );
  }
}

export default Test;
