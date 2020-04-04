import React, { Component } from "react"
import Image from "gatsby-image";

class projects extends Component {
  render() {
    const { projects } = this.props
    console.log(projects)
    return (
      <ul>
        {projects.map(({ node }) => (
          <li>
            <h1>{node.Title}</h1>
            <img
            src={`http://localhost:1337${node.country.Flag.url}`}
            // alt={article.node.image.publicURL}
            height="100"
          />
          </li>
        ))}
      </ul>
    )
  }
}

export default projects
