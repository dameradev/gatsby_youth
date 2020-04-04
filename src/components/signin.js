import React, { Component } from "react"
import { Link } from "gatsby"
import { userRegistration } from "../api"

import Form from "./styles/Form"

class Signin extends Component {
  state = { email: "", password: "", username: "" }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    userRegistration({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
  }
  render() {
    return (
      <Form method="post" onSubmit={e => this.handleSubmit(e)}>
        <h2>Login to an exising account</h2>
        <fieldset>
          

          <label htmlFor="username">
            <input
              name="username"
              type="text"
              id="username"
              value={this.state.username}
              placeholder="Please enter your email"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            <input
              name="password"
              type="password"
              id="password"
              value={this.state.password}
              placeholder="Please enter your password"
              onChange={this.handleChange}
            />
          </label>
          <div className="links-container">
            <Link to={`/auth?path=register`}>
                Don't have an account?
            </Link>

            <Link to={`/auth?path=reset`}>
                Forgot password?
            </Link>
            </div>

          <button type="submit">Sign Up</button>
        </fieldset>
      </Form>
    )
  }
}

export default Signin
