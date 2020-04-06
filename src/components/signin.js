import React, { useContext, useState } from "react"
import { Link, navigate } from "gatsby"
import { userRegistration } from "../api"

import { strapiLogin } from "../lib/auth"

import Form from "./styles/Form"
import Axios from "axios"

import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import { USER_LOGIN } from "../context/actions"

const SignIn = () => {
  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useContext(GlobalDispatchContext);

  
  const handleSubmit = (e) => {
    e.preventDefault()
    strapiLogin({
      email,
      password
    }).then(res => {
      console.log(res)
      
      dispatch({ type: USER_LOGIN, payload: res.user.username })
      navigate("/")
    })
  }
  return (
    <Form method="post" onSubmit={e => handleSubmit(e)}>
      <h2>Login to an exising account</h2>
      <fieldset>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            id="email"
            value={email}
            placeholder="Please enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <input
            name="password"
            type="password"
            id="password"
            value={password}
            placeholder="Please enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="links-container">
          <Link to={`/auth?path=register`}>Don't have an account?</Link>

          <Link to={`/auth?path=reset`}>Forgot password?</Link>
        </div>

        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  )
}

export default SignIn
