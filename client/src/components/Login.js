import React, { useState } from "react"
import { useAuth } from "../hooks"

const Login = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { signin } = useAuth()

  const handleSubmit = event => {
    event.preventDefault()

    signin(username, password).then(response => {
      props.history.push("/")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
