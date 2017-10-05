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

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    this.setState ({title: e.target.title,
                    year: e.target.year,
                    director: e.target.director,
                    photo_url: e.target.photo_url})
  }

  handleSubmit(e) {
    alert('Movie was updated': + this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onUpdate={this.handleUpdate} />
        </label>
        <label>
          Year:
          <input type="text" value={this.state.year} onUpdate={this.handleUpdate} />
        </label>
        <label>
          Director:
          <input type="text" value={this.state.director} onUpdate={this.handleUpdate} />
        </label>
        <label>
          Photo:
          <input type="text" value={this.state.photo_url} onUpdate={this.handleUpdate} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default UpdateForm;
