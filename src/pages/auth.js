import React from "react"
import { Link } from "gatsby"
import queryString from "query-string"

import Layout from "../components/layout"

import Signup from "../components/signup"
import Signin from "../components/signin"
// const

const AuthPage = props => {
  console.log(props.location.search)
  const parsedParam = queryString.parse(props.location.search)

  return (
    <Layout>{parsedParam.path === "login" ? <Signin /> : <Signup />}</Layout>
  )
}

export default AuthPage
