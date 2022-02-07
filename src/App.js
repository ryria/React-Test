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

//create 5 column wide and 6 row high grid of textboxes
class Grid extends Component {
  render() {
    const rows = []
    for (let i = 0; i < 6; i++) {
      const columns = []
      for (let j = 0; j < 5; j++) {
        columns.push(<TextBox key={j} />)
      }
      rows.push(<div key={i}>{columns}</div>)
    }
    return <div>{rows}</div>
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
          <Grid />
        </header>
      </div>
    )
  }
}

export default App
