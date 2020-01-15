import React from "react";

export default function Confirmation(props) {
  return (
    <div>
      <h3>PLEASE CONFIRM YOUR INFORMATION: </h3>
      <input type="submit" value="PURCHASE" />
      <h4>First Name:</h4>
      <p>{props.firstName}</p>
      <h4>Last Name:</h4>
      <p>{props.lastName}</p>
      <h4>Email:</h4>
      <p>{props.email}</p>
      <h4>password:</h4>
      <p>{props.password.replace(/./g, "*") + " (" + props.password + ")"}</p>
      <h4>line 1:</h4>
      <p>{props.line1}</p>
      <h4>line 2:</h4>
      <p>{props.line2}</p>
      <h4>City:</h4>
      <p>{props.city}</p>
      <h4>State:</h4>
      <p>{props.state}</p>
      <h4>Zip:</h4>
      <p>{props.zip}</p>
      <h4>Phone:</h4>
      <p>{props.phone}</p>
      <h4>Credit Card Number:</h4>
      <p>{props.ccNumber}</p>
      <h4>Expiration Date:</h4>
      <p>{props.expiration}</p>
      <h4>CVV:</h4>
      <p>{props.cvvNumber}</p>
      <h4>Billing Zipcode:</h4>
      <p>{props.billZip}</p>
      <button type="submit" onClick={props.handlePurchase}>
        PURCHASE
      </button>
    </div>
  );
}
