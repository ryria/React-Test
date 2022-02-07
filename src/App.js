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

//create a 5x5 table of TextBox components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
                      </Row>
          <Row>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
            <Col xs={6} md={5}>
              <TextBox />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default App
