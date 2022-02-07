import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"


//create textbox component that when clicked cycles color between Grey > Green > Yello
class TextBox extends Component {
  state = {
    color: "grey"
  }
  changeColor = () => {
    this.setState({
      color: "green"
    })
  }
  render() {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: this.state.color
        }}
        onClick={this.changeColor}
      />
    )
  }
}

//create 6x6 grid of TextBox components called Squares
class Squares extends Component {
  render() {
    const squares = []
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        squares.push(<TextBox />)
      }
    }
    return <div>{squares}</div>
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Squares />
        </header>
      </div>
    )
  }
}

export default App
