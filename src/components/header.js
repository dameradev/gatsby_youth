import { Link } from "gatsby"
import PropTypes from "prop-types"

import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

import { unsetToken } from "../lib/auth"
import styled from 'styled-components'

const Header = ({ siteTitle, authenticatedUser }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  
  

  const HeaderStyles = styled.header`
    background: ${props => props.background};
    color: green;
  `;


  const Button = styled.button`
    color: green;
  `;



  return (
    <HeaderStyles background={state.theme}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          <Button onClick={() => dispatch({type: "TOGGLE_THEME"})}>Click me</Button>
          {authenticatedUser && (
            <Link to="/">
              <a className="logout" onClick={unsetToken}>
                Logout
              </a>
            </Link>
          )}
        </h1>
      </div>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
