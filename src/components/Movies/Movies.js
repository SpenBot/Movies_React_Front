import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { Link } from 'react-router-dom'


class Movies extends Component {

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
        console.log(this.state.movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }



  render() {
    let moviesList = this.state.movies.map( (movie) => {
      return (
        // <a href={`/movies/${movie.title}`}> {movie.title} </a>
        <Link to={`/movies/${movie.title}`}> {movie.title} </Link>
      )
    })

    return (
      <div>

        {moviesList}

      </div>
    );
  }
}

export default Movies;
