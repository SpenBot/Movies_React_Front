import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import Movies from '../Movies/Movies.js'

import './App.css'


class App extends Component {

  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:4000/movies')
      .then((res) => {
        console.log(res)
        this.setState({
          movies: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}


export default App;
