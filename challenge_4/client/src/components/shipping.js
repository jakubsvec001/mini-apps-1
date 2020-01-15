import React from "react"

export default function Shipping(props) {
  return (
    <div>
      <h3>PLEASE ENTER SHIPPING INFORMATION</h3>
      <form onSubmit={props.nextButton} >
        <label>
          Line 1:
          <br />
          <input
            type="text"
            name="line1"
            value={props.line1}
            placeholder="Line 1"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Line 2:
          <br />
          <input
            type="text"
            name="line2"
            value={props.line2}
            placeholder="Line 2"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          City:
          <br />
          <input
            type="text"
            name="city"
            value={props.city}
            placeholder="City"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          State:
          <br />
          <input
            type="text"
            name="state"
            value={props.state}
            placeholder="State"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Zip:
          <br />
          <input
            type="text"
            name="zip"
            value={props.zip}
            placeholder="Zip"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Phone:
          <br />
          <input
            type="text"
            name="phone"
            value={props.phone}
            placeholder="Phone"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <input type="submit" value="NEXT" />
      </form>
    </div>
  );
}