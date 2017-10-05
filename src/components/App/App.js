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




  render() {

    return (
      <Router>
        <div>
          <main>

            <Switch>



              <Route path="/movies" render={(props) => {
                  return ( <Movies /> )
                }}
              />

              <Route
                path="/*" render={(props) => {
                  return ( <Redirect to="/movies" /> )
                }}
              />


            </Switch>

            </main>
        </div>
      </Router>
    );
  }
}


export default App;
