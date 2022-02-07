import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Grid, Row, Col } from "react-grid-system"

//import react-grid-system and make a 6x5 table of TextBox components


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

//create a component that creates 2 rows of the TextBox component
class TextBoxRow extends Component {
  render() {
    return (
      <Row>
        <Col xs={6}>
          <TextBox />
        </Col>
        <Col xs={6}>
          <TextBox />
        </Col>
      </Row>
    )
  }
}



class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TextBoxRow />
        </header>
      </div>
    )
  }
}

export default App
