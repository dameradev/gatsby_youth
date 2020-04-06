import React, {useState} from "react"
// import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import CreateProjectComponent from "../components/createProject"
import Signup from "../components/signup"
import Form from "../components/styles/Form"
// const

const CreateProject = () => {
  return (
   <Layout>
       <CreateProjectComponent />
   </Layout>
  )
}

export default CreateProject

{
  /* <h1>Hi peopleee</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */
}
