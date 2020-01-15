import React from "react"

export default function Account(props) {
  return (
    <div>
      <h3>PLEASE ENTER ACCOUNT INFORMATION</h3>
      <form onSubmit={props.nextButton} >
        <label>
          First Name:
          <br />
          <input
            type="text"
            name="firstName"
            value={props.firstName}
            placeholder="First Name"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input
            type="text"
            name="lastName"
            value={props.lastName}
            placeholder="Last Name"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            name="email"
            value={props.email}
            placeholder="Email"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="text"
            name="password"
            value={props.password.replace(/./g, '*')}
            placeholder="Password"
            onChange={props.handleChange}
          ></input>
        </label>
        <br />
        <input type="submit" value="NEXT"  />
      </form>
    </div>
  );
}