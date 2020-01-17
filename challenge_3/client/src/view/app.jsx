import React, { Component } from "react";
import TilePiece from "./tilePiece"

class App extends Component {
  constructor() {
    super(),
    this.state = {
      n: 5
    }
  }

  createBoard(){
    const n = this.state.n;
    console.log(n)
  }

  render() {

    return (
      <div>
        <TilePiece />
        <TilePiece />
        <TilePiece />
        <TilePiece />
      </div>
    );
  }
}

export default App;
