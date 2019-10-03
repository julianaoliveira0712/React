import React, { Component } from 'react';
import Home from "../src/pages/home/Home";
import Signup from './pages/singup/Signup';
class Meuh1 extends Component {
  render() {
    return <h1>Você clicou {this.props.title}</h1>
  }
}

class Meubtn extends Component {
  render() {
    return <button onClick={() => this.props.change(this.props.name)}>{this.props.name}</button>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualbtn: ''
    }
  }

  handleChange = (name) => {
    this.setState({
      actualbtn: name
    })
  }

  render() {
    return (
      <>
        <Signup />
        {/* < Meuh1 title={this.state.actualbtn} />
        <Meubtn change={this.handleChange} name="button 1" />
        <Meubtn change={this.handleChange} name="button 2" />
        <Meubtn change={this.handleChange} name="button 3" /> */}
      </>
    )
  }
}

export default App;
