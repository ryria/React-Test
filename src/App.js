import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Row, Col } from "react-grid-system"

//import react-grid-system and make a 6x5 table of TextBox components


//create textbox input component that when clicked cycles color between Grey > Green > Yellow > Red > Grey

class TextBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "grey"
    }
  }

  handleClick = () => {
    if (this.state.color === "grey") {
      this.setState({
        color: "green"
      })
    } else if (this.state.color === "green") {
      this.setState({
        color: "yellow"
      })
    } else if (this.state.color === "yellow") {
      this.setState({
        color: "red"
      })
    } else {
      this.setState({
        color: "grey"
      })
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          width: "100px",
          height: "100px",
          margin: "5px",
          border: "1px solid black"
        }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    )
  }
}

//create a text input component with a one character limit

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div style={{
        backgroundColor: this.state.color,
        width: "100px",
        height: "100px",
        margin: "5px",
        border: "1px solid black"
      }}>
        <input
          type="text"
          value={this.state.text}
          maxLength="1"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


//create a component that creates 2 rows of the TextBox component
class TextBoxRow extends Component {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <TextInput />
          <TextBox />
        </Col>
        <Col xs={4}>
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
