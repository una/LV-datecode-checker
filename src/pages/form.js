import React, { Component } from "react"
import factoryCodes from '../factoryCodes.json'

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
    let year, month, country = '';
    let real = false;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // function to get the proper month
    const getMonth = (n) => {
      const month = n - 1;
      return monthNames[month]
    }

    // function to get the country
    const getCountry = (val) => {
      let real = false;
      let code = val.toUpperCase()
      for (let key in factoryCodes) {
        if (factoryCodes[key].codes.includes(code)) {
          real = true
          return key
        }
      }
      return real
    }

    const renderResult = () => {
      if (real) {
        console.log(`The date code shows a production date of: ${month} ${year}`)
      } if (country) {
        console.log(`The item was produced in ${country}`)
      } if (!real) {
        console.log('This is not a valid datecode')
      }
      this.setState({ hasResult: true });
    }

    // if value is only numbers, it was created in the early 1980's (ex. 836)
    const early80s = new RegExp('^[0-9]{3,4}$')

    if (early80s.test(value)) {
      // check that it's the 80's
      if (value.slice(0,1) === '8') {
        // set year and month
        year = `19${value.slice(0, 2)}`
        if (value.length === 3) {
          month = getMonth(value.slice(2, 3))
        } else if (value.length === 4) {
          month = getMonth(value.slice(2, 4))
        }
        real = true
        renderResult()
      }
    }

    // if value is 3-4 numbers followers by two letters, it's late 1980's (ex. 874VX)
    const mid80s = new RegExp('^[0-9]{3,4}[A-Z][A-Z]$')
    if (mid80s.test(value)) {
      // check that it's the 80's
      if (value.slice(0, 1) === '8') {
        // set year and month
        year = `19${value.slice(0, 2)}`
        if (value.length === 5) {
          month = getMonth(value.slice(2, 3))
          // check if the country is valid
          if (getCountry(value.slice(3, 5))) {
            country = getCountry(value.slice(3, 5))
          } else {
            real = false
            renderResult()
            return
          }
        } else if (value.length === 6) {
          month = getMonth(value.slice(2, 4))
          // check if the country is valid
          if (getCountry(value.slice(4, 6))) {
            country = getCountry(value.slice(4, 6))
          } else {
            real = false
            renderResult()
            return
          }
        }
        real = true
        renderResult()
      }
    }

    // if the value is 2 letters and 4 numbers, it's 1990+ (ex. VI1025 until 2007 and SD2057 after)
    const after80s = new RegExp('^[A-Z]{2}[0-9]{4}$')
    if (after80s.test(value)) {
      year = 'after 80s'
      real = true
    }
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