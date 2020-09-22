import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  //react class component에서 가져온다(삼성폰을 개발할때 cell phone에서 가져오는것처럼)
  state = {
    count: 0,
  };
  add = () => {
    //함수임
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
