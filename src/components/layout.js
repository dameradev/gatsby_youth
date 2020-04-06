/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Cookies from "js-cookie";

import Header from "./header"
import "./layout.css"

import { checkUser } from "../api"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"


import {SET_TOKEN, USER_LOGIN} from '../context/actions'

import { getUserFromLocalCookie, getUserFromServerCookie } from "../lib/auth"

const Layout = props => {

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    // Update the document title using the browser API
    // const obj = {
    //   token: Cookies.get('jwt'),
      const userName = getUserFromLocalCookie()
    // }

    const token = Cookies.get('jwt');

    checkUser(token);
    
    if (!state.userName && userName) {
      dispatch({USER_LOGIN, payload: userName})
    }

    // if(!state.userName && obj.token && obj.userName) {
      
    // }

  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
