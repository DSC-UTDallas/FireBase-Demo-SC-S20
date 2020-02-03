import React from 'react';
import logo from './logo.svg';
import './App.css';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder="To Add" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form >
            <input type="submit" value="Load" />
          </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
