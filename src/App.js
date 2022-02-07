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

//create 6x6 grid of TextBox components
class Grid extends Component {
  render() {
    let rows = []
    for (let i = 0; i < 6; i++) {
      let cols = []
      for (let j = 0; j < 6; j++) {
        cols.push(<TextBox />)
      }
      rows.push(<div className="row">{cols}</div>)
    }
    return <div className="grid">{rows}</div>
  }
}





class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
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
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
