import React from 'react';
import logo from './logo.svg';
import './App.css';

const firebaseConfig =
{
  apiKey: "AIzaSyAdMgyMjKVE_wxx0RzjfD9yBtwxO-gF4wA",
  authDomain: "fir-demo-fbc23.firebaseapp.com",
  databaseURL: "https://fir-demo-fbc23.firebaseio.com",
  projectId: "fir-demo-fbc23",
  storageBucket: "fir-demo-fbc23.appspot.com",
  messagingSenderId: "356105976876",
  appId: "1:356105976876:web:57112787f63f508ad9a589",
  measurementId: "G-RD3QLY0LZ7"
}

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

class App  extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var submitted = this.state.value;
    db.collection("data").add({
      value: submitted
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    event.preventDefault();
  }

  handleLoad(event) {
    console.log('Database:');
    db.collection("data").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().value}`);
      });
    });
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
          <form onSubmit={this.handleLoad}>
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
