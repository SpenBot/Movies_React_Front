import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Movie extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Movie Info :</h2>
        {this.props.match.params.title}
      </div>
    );
  }
}

export default Movie;
