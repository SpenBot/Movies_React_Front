import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Movies extends Component {
  render() {

    return (
      <div>
        {this.props.movies[0]}
      </div>
    );
  }
}

export default Movies;
