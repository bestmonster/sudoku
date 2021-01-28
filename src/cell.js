import React, { Component } from "react";

class Cell extends Component {
  // state = {
  //   number: 1,
  // };
  render() {
    return (
      <div
        onClick={(e) => {
          if (this.props.isinitial) {
            return;
          }
          this.props.onChang((this.props.number + 1) % 5);
        }}
        className={`cell ${this.props.isinitial ? "initial" : ""}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

export default Cell;
