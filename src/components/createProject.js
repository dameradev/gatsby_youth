import React, { useState } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import Form from "./styles/Form"

const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($title: String!) {
    createProject(input: {
    data: {
      Title: $title
    }
  }) {
    project {
      Title
    }
  }
  }
`

const CreateProject = () => {
  const [title, setTitle] = useState("")
  const handleSubmit = () => {}
  return (
    <Mutation mutation={CREATE_PROJECT_MUTATION} variables={{title}}>
      {(createProject) => (
        <Form method="post" onSubmit={async e => {
          // STOP THE FORM from submiting
          e.preventDefault();
          // call the mutation
          
          const res = await createProject();
          console.log(res, "RESPONSE");
          

        }}>
          
          <fieldset>
            {/* {error && <p>{error}</p>} */}
            <label htmlFor="title">
              <input
                id="title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
              />
            </label>
            <button  type="submit">Submit</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  )
}

export default CreateProject
