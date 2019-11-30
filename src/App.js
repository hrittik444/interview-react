import React, { Component } from 'react';
// import { Provider } from "react-redux";
// import { configureStore } from "./store";
import Login from "./Login";

// const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.submitUser = this.submitUser.bind(this);
    this.props = {
      user: [{
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313",
        "password": "wdwkqbwebwlcicwbe8c7t834giebqecbqbqxliweubwqe"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314",
        "password": "wdwkqbwebwlcicwb45676543e8c7t834giebqecbqbqxliweubwqe"
        },
        {
        "id":3,
        "name":"test3",
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315",
        "password": "wdwkqbwebwlcicwbe8ceeerfef4giebqecbqbqxliweubwqe"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316",
        "password": "wdwkqbwebwlcicwoiui098-0909be8c7t834giebqecbqbqxliweubwqe"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317",
        "password": "wdwkqbwebwlcicwbgyybyye8c7t834giebqecbqbqxliweubwqe"
        }]
    }  
    this.submitUser = this.submitUser.bind(this);
    this.state = {
      correctUser: ''
    }
  }

  submitUser(userData) {
    const correctUser = this.props.user.filter(u => u.username === userData.username && u.password === userData.password) || null;
    this.setState({correctUser});
  }

  render() {
    return(
      // <Provider store={store}>
        <div className="App"> 
          <h1>Demo App</h1> 
          {this.state.correctUser === '' ? <Login submit={this.submitUser}/> : <div>{userInfo}</div>}
        </div>
      // </Provider>
    );
  }
}

export default App;
