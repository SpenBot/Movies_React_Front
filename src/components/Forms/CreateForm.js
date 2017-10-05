import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                  year: '',
                  director: '',
                  photo_url: ''};

    this.handleCreate = this.handleCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreate(e) {
    this.setState({title: e.target.title,
                   year: e.target.year,
                   director: e.target.director,
                   photo_url: e.target.photo_url});
  }

  handleSubmit(e) {
    alert('Movie was submitted: ' + this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onCreate={this.handleCreate} />
        </label>
        <label>
          Year:
          <input type="text" value={this.state.year} onCreate={this.handleCreate} />
        </label>
        <label>
          Director:
          <input type="text" value={this.state.director} onCreate={this.handleCreate} />
        </label>
        <label>
          Photo:
          <input type="text" value={this.state.photo_url} onCreate={this.handleCreate} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default CreateForm;
