import React from "react";

export default function Payment(props) {
  return (
    <div>
      <h3>PLEASE ENTER BILLING INFORMATION</h3>
      <form onSubmit={props.nextButton}>
        <label>
          Credit Card Number:
          <br />
          <input
            type="text"
            name="ccNumber"
            value={props.ccNumber}
            placeholder="Credit Card Number"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Expiration:
          <br />
          <input
            type="text"
            name="expiration"
            value={props.expiration}
            placeholder="Expiration Date"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          CCV:
          <br />
          <input
            type="text"
            name="ccvNumber"
            value={props.cvvNumber}
            placeholder="CVV"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Billing Zipcode:
          <br />
          <input
            type="text"
            name="billZip"
            value={props.billZip}
            placeholder="Billing Zipcode"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <input type="submit" value="NEXT" />
      </form>
    </div>
  );
}
