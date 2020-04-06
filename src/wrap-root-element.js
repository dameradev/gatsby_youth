import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"
import GlobalContextProvider from "./context/GlobalContextProvider"
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <GlobalContextProvider>{element}</GlobalContextProvider>
  </ApolloProvider>
)
