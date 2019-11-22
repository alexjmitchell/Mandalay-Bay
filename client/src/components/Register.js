import React, { useState } from "react"
import { useAuth } from "../hooks"

const Register = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { reg } = useAuth()

  const handleSubmit = event => {
    event.preventDefault()

    reg(username, password).then(response => {
      props.history.push("/")
    })
  }

  return (
    <div className="register-container">
      <div className="register-form">
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
          <button type="submit" className="submit-button">
            register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
