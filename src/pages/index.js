import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectsComponent from "../components/projects"
import Signup from "../components/signup"
// const

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <StaticQuery
      query={graphql`
        query {
          allStrapiProject {
            edges {
              node {
                Title
                country {
                  Name
                  Flag {
                    name
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => { 
        return (
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>Strapi blog</h1>
              <ProjectsComponent projects={data.allStrapiProject.edges} />
              <Signup/>
            </div>
          </div>
        )
      }}
    />
  </Layout>
)

export default IndexPage

{
  /* <h1>Hi peopleee</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */
}
