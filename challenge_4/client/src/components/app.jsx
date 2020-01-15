import React, { Component } from "react";
import Account from "./account"
import Shipping from "./shipping"
import Payment from "./payment" 
import Confirmation from "./confirmation"
import { Router, Route, Switch, Link } from "react-router";

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.


class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      ccNumber: "",
      expiration: "",
      cvvNumber: "",
      billZip: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.nextButton = this.nextButton.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    e.preventDefault()
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  nextButton(e){
    e.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <h1>PAYMENT APP</h1>
        <Account
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          nextButton={this.nextButton}
        />
        <Shipping
          line1={this.state.line1}
          line2={this.state.line2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          phone={this.state.phone}
          handleChange={this.handleChange}
          nextButton={this.nextButton}
        />
        <Payment
          ccNumber={this.state.ccNumber}
          expiration={this.state.expiration}
          cvvNumber={this.state.cvvNumber}
          billZip={this.state.billZip}
          handleChange={this.handleChange}
          nextButton={this.nextButton}
        />
        <Confirmation 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          line1={this.state.line1}
          line2={this.state.line2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          phone={this.state.phone}
          ccNumber={this.state.ccNumber}
          expiration={this.state.expiration}
          cvvNumber={this.state.cvvNumber}
          billZip={this.state.billZip} 
        />
      </div>
    );
  }
}

export default App;
