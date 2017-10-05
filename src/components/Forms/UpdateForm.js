import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class UpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {title: '',
                  year: '',
                  director: '',
                  photo_url: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState ({title: e.target.title,
                    year: e.target.year,
                    director: e.target.director,
                    photo_url: e.target.photo_url})
  }

  handleSubmit(e) {
    alert('Movie was updated');
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Year:
          <input type="text" value={this.state.year} onChange={this.handleChange} />
        </label>
        <label>
          Director:
          <input type="text" value={this.state.director} onChange={this.handleChange} />
        </label>
        <label>
          Photo:
          <input type="text" value={this.state.photo_url} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default UpdateForm;
