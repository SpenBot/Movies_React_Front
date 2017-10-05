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
import Movie from '../Movie/Movie.js'
import CreateForm from '../Forms/CreateForm'
import UpdateForm from '../Forms/UpdateForm'

import './App.css'

import CreateForm from '../Forms/CreateForm'
import UpdateForm from '../Forms/UpdateForm'


class App extends Component {




  render() {

    return (

      <Router>
        <div>
          <main>

            <Switch>


              <Route path="/movies/:title" render={(props) => {
                  return (
                    <div>
                      <Movie {...props}/>
                      <UpdateForm />
                      {/* <Delete /> */}
                    </div>
                  )
                }}
              />


              <Route exact path="/movies" render={(props) => {
                  return (
                    <div>
                      <Movies {...props}/>
                      <CreateForm />
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
