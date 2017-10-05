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
                  return (
                    <div>
                      <Movies />
                      {/* <CreateForm /> */}
                    </div>
                  )
                }}
              />

              <Route path="/movies/:title" render={(props) => {
                  return (
                    <div>
                      {/* <Movie /> */}
                      {/* <EditForm />
                      <Delete /> */}
                    </div>
                  )
                }}
              />

              <Route
                path="/*" render={() => {
                  return ( <Redirect to="/movies" /> )
                }}
              />


            </Switch>

            </main>
        </div>
      </Router>

    )
  }
}


export default App;
