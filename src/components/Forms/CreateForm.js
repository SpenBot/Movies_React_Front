import React, {Component} from 'react'
import axios from 'axios'

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        year: '',
        director: '',
        photo_url: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target);
    // this.setState({title: e.target.title,
    //                year: e.target.year,
    //                director: e.target.director,
    //                photo_url: e.target.photo_url});
    this.setState({
      movie:{
        ...this.state.movie,
        [e.target.name]:e.target.value
      }
    }, ()=>console.log(this.state))
  }

  handleSubmit(e) {
    alert('Movie was submitted');
    e.preventDefault();
    axios.post("/movies", {
      title: this.state.movie.title,
      year: this.state.movie.year,
      director: this.state.movie.director,
      photo_url: this.state.movie.photo_url
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Year:
          <input name="year" type="text" value={this.state.year} onChange={this.handleChange} />
        </label>
        <label>
          Director:
          <input name="director" type="text" value={this.state.director} onChange={this.handleChange} />
        </label>
        <label>
          Photo:
          <input name="photo_url" type="text" value={this.state.photo_url} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default CreateForm;
