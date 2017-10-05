import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'



class Movie extends Component {

  constructor () {
    super()
    this.state = {
      movie: null
    }
  }

  componentDidMount () {
    console.log(`http://localhost:4000/movies/${this.props.match.params.title}`)
    axios.get(`http://localhost:4000/movies/${this.props.match.params.title}`)
      .then((res) => {
        console.log(res)
        this.setState({
          movie: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>Movie Info :</h2>
        <br/>
        {this.state.movie && this.state.movie.title}
        <br/>
        {this.state.movie && this.state.movie.year}
        <br/>
        {this.state.movie && this.state.movie.director}
        <br/>
        {/* <img src= $"{this.state.movie.photo_url}", height="300" width="260" /> */}
              <br/>
              <br/>
              <br/>
              <br/>
      </div>
    );
  }
}

export default Movie;
