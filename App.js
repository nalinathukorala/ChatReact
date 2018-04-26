import React, { Component } from 'react';
import firebase from 'firebase';
//import logo from './logo.svg';
//import './App.css';
import MessageList from './Components/MessageList';
import Header from './Components/Header';
import MessageBox from './Components/MessageBox';
class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyD5kmQwgBHi8cRCVVgBRiynkDbu6OBrgmo",
      authDomain: "simplechat-efca7.firebaseapp.com",
      databaseURL: "https://simplechat-efca7.firebaseio.com",
      projectId: "simplechat-efca7",
      storageBucket: "",
      messagingSenderId: "132453887462"
    };
    firebase.initializeApp(config);

  }
  render() {
    return (
        <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
      
    );
  }
}

export default App;
