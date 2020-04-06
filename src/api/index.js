import axios from "axios"

export const userRegistration = userData => {
  return axios
    .post("http://localhost:1337/auth/local/register", {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      organization: userData.organization,
    })
    .then(response => {
      // Handle success.
      console.log("User profile", response.data.user)
      console.log("User token", response.data.jwt)
    })
    .catch(error => {
      // Handle error.
      console.log("An error occurred:", error)
    })
}

export const googleAuth = () => {
  return axios.get("/connect/google").then(res => console.log(res))
}


export const checkUser = (token) => {
  return axios.post('/token/decrypt', token).then(res => console.log(res))
}