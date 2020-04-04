import React, { Component } from "react"
import { Link } from "gatsby"
import { userRegistration } from "../api"

import Form from "./styles/Form"


const typeOfUser = [
    { label: 'Participant', value: 'participant' },
    { label: 'Organization', value: 'organization' }
];

class Signup extends Component {
  state = { email: "", password: "", username: "", type: "participant"  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    userRegistration({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      organization: this.state.type === 'organization' ? true : false
    })
  }
  render() {
    return (
      <Form method="post" onSubmit={e => this.handleSubmit(e)}>
        <h2>Login to an exising account</h2>
        <fieldset>
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              id="email"
              value={this.state.email}
              placeholder="Please enter your email"
              onChange={this.handleChange}
            />
          </label>

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
          <label htmlFor="type">
            <select
                name="type"
                type="number"
                id="type"
                value={this.state.type}
                onChange={this.handleChange}
            >
                {typeOfUser.map(user => (
                <option value={user.value} label={user.label} />
                ))}
            </select>
        </label>
          <div className="links-container">
            <Link to={'auth?path=login'}>
              Already have an account?
            </Link>
          </div>

          <button type="submit">Sign Up</button>
        </fieldset>
      </Form>
    )
  }
}

export default Signup
