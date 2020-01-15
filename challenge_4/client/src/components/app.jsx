import React, { Component } from "react";
import { Router, Route, Switch, Link } from "react-router";

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

function Account(props) {
  return (
    <div>
      <h3>PLEASE ENTER ACCOUNT INFORMATION</h3>
      <form>
        <label>
          First Name:
          <br />
          <input
            type="text"
            name='firstName'
            value={props.firstName}
            placeholder="First Name"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input 
            type="text" 
            name='lastName' 
            value={props.lastName} 
            placeholder="Last Name"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Email:
          <br />
          <input 
            type="text" 
            name='email' 
            value={props.email} 
            placeholder="Email"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Password:
          <br />
          <input 
            type="text" 
            name='password' 
            value={props.password} 
            placeholder="Password"
            onChange={props.onChange}>
          </input>
        </label>
      </form>
    </div>
  );
}

function Shipping(props){
  return (
    <div>
      <h3>PLEASE ENTER SHIPPING INFORMATION</h3>
      <form>
        <label>
          Line 1:
          <br />
          <input
            type="text"
            name='line1'
            value={props.line1}
            placeholder="Line 1"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Line 2:
          <br />
          <input 
            type="text" 
            name='line2' 
            value={props.line2} 
            placeholder="Line 2"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          City:
          <br />
          <input 
            type="text" 
            name='city' 
            value={props.city} 
            placeholder="City"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          State:
          <br />
          <input 
            type="text" 
            name='state' 
            value={props.password} 
            placeholder="State"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Zip:
          <br />
          <input 
            type="text" 
            name='zip' 
            value={props.password} 
            placeholder="Zip"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Phone:
          <br />
          <input 
            type="text" 
            name='phone' 
            value={props.password} 
            placeholder="Phone"
            onChange={props.onChange}>
          </input>
        </label>
      </form>
    </div>
  );
}

function Payment(props) {
  // ccNumber: "",
  // expiration: "",
  // cvvNumber: "",
  // billZip: ""
  return (
    <div>
      <h3>PLEASE ENTER BILLING INFORMATION</h3>
      <form>
        <label>
          Credit Card Number:
          <br />
          <input
            type="text"
            name='ccNumber'
            value={props.ccNumber}
            placeholder="Credit Card Number"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Expiration:
          <br />
          <input 
            type="text" 
            name='expiration' 
            value={props.expiration} 
            placeholder="Expiration Date"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          CCV:
          <br />
          <input 
            type="text" 
            name='ccvNumber' 
            value={props.ccvNumber} 
            placeholder="CCV"
            onChange={props.onChange}>
          </input>
        </label>
        <br />
        <label>
          Billing Zipcode:
          <br />
          <input 
            type="text" 
            name='billZip' 
            value={props.billZip} 
            placeholder="Billing Zipcode"
            onChange={props.onChange}>
          </input>
        </label>
      </form>
    </div>
  );
}

function Confirmation(props) {
  return (
    <div>
      <h3>PLEASE CONFIRM YOUR INFORMATION: </h3>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Jake",
      lastName: "Wija",
      email: "jakewija@icloud.com",
      password: "something",
      line1: "15100 6th",
      line2: "Unit 327",
      city: "Burien",
      state: "WA",
      zip: "98166",
      phone: "505 920 4004",
      ccNumber: "3434652345",
      expiration: "08/30",
      cvvNumber: "123",
      billZip: "98766"
      // firstName: "",
      // lastName: "",
      // email: "",
      // password: "",
      // line1: "",
      // line2: "",
      // city: "",
      // state: "",
      // zip: "",
      // phone: "",
      // ccNumber: "",
      // expiration: "",
      // cvvNumber: "",
      // billZip: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='form'>
        <h1>PAYMENT APP</h1>
        <Account
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          onChange={this.onChange}
        />
        <Shipping
          line1={this.line1}
          line2={this.line2}
          city={this.city}
          state={this.state}
          zip={this.zip}
          phone={this.phone}
          onChange={this.onChange}
        />
        <Payment
          ccNumber={this.ccNumber}
          expiration={this.expiration}
          cvvNumber={this.cvvNumber}
          billZip={this.billZip}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
