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
    let year = '';
    let real = false;
    // if value is only numbers, it was created in the early 1980's (ex. 836)
    const early80s = new RegExp('^[0-9]{3}$')

    if (early80s.test(value)) {
      year = 'early 80s'
      real = true
    }

    // if value is 3-4 numbers followers by two letters, it's late 1980's (ex. 874VX)
    const mid80s = new RegExp('^[0-9]{3,4}[A-Z][A-Z]$')
    if (mid80s.test(value)) {
      year = 'mid 80s'
      real = true
    }

    // if the value is 2 letters and 4 numbers, it's 1990+ (ex. VI1025 until 2007 and SD2057 after)
    const after80s = new RegExp('^[A-Z]{2}[0-9]{4}$')
    if (after80s.test(value)) {
      year = 'after 80s'
      real = true
    }

    if (real) {
      console.log(`This is a bag from ${year}`)
    } else {
      console.log('This is not a valid datecode')
    }
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