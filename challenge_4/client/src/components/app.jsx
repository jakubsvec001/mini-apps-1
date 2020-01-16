import React, { Component } from "react";
import Account from "./account";
import Shipping from "./shipping";
import Payment from "./payment";
import Confirmation from "./confirmation";
import Checkout from "./checkout";

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
      billZip: "",
      page: 'confirmation',
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  resetState() {
    const toReset = [
      firstName,
      lastName,
      email,
      password,
      line1,
      line2,
      city,
      state,
      zip,
      phone,
      ccNumber,
      expiration,
      cvvNumber,
      billZip,
    ]
    for (let item of toReset){
      this.setState({
        item: ''
      })
    }
  }

  nextButton(e) {
    console.log("next button clicked")
    e.preventDefault();
    if (this.state.page === 'checkout'){
      console.log('in checkout')
      this.setState({
        page: 'account'
      })
    } else if (this.state.page === "account") {
      this.setState({
        page: 'shipping'
      })
    } else if (this.state.page === "shipping") {
      this.setState({
        page: 'payment'
      })
    } else if (this.state.page === "payment") {
      this.setState({
        page: 'confirmation'
      })
    }
  }

  handlePurchase(e) {
    e.preventDefault();
    console.log('purchasing')
  }

  render() {
    return (
      <div className="form">
        <h1>PAY FOR NOTHING APP</h1>
        { (() => {
          if (this.state.page === 'account'){
            return (
              <Account
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                password={this.state.password}
                handleChange={this.handleChange}
                nextButton={this.nextButton}
              /> 
            )
          } else if (this.state.page === 'shipping'){
            return (
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
            )
          } else if (this.state.page === 'payment'){
            return (
              <Payment
                ccNumber={this.state.ccNumber}
                expiration={this.state.expiration}
                cvvNumber={this.state.cvvNumber}
                billZip={this.state.billZip}
                page={this.state.page}
                handleChange={this.handleChange}
                nextButton={this.nextButton}
              />  
            )
          } else if (this.state.page === 'confirmation'){
            return (
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
                handlePurchase={this.handlePurchase}
              /> 
            )
          } else {
            return (
              <Checkout nextButton={this.nextButton} /> 
            )
          }})()
        }
      </div>
    );
  }
}

export default App;
