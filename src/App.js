import React, { Component } from "react";
import Board from "./board";
import "./App.css";

// function Cell() {
//   return (
//     <div className="cell">{this.props.number}</div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <Board />
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
