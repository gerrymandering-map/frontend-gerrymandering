import React, { Component } from 'react';
import superagent from 'superagent';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    superagent.post('http://localhost:3000/api/state')
      .send(this.state)
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('name', name, 'value', value);

    this.setState({ [name]: value }, () => console.log(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          JSON:
          <textarea
            rows='10'
            cols='50'
            type='text'
            name='json'
            value={this.state.json}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          Year:
          <input
            type='number'
            name='year'
            value={this.state.year}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          Scale:
          <input
            type='number'
            name='scale'
            value={this.state.scale}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          Center:
          <input
            type='text'
            name='center'
            value={this.state.center}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          Extra info:
          <input
            type='text'
            name='extraInfo'
            value={this.state.extraInfo}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default PostForm;
