import React, { Component } from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hasResult: false,
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculateDatecode(this.state.value)
    
  }

  calculateDatecode(value) {
    console.log(value)
    this.setState({hasResult: true});
  }

  render() {
    const result = this.state.hasResult ? (
      <div>
        <h3>For Datecode {this.state.value}:</h3>
        <p>{this.state.message}</p>
      </div>
    ) : (
      ''
    )

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Datecode:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {result}
      </div>
    );
  }
}