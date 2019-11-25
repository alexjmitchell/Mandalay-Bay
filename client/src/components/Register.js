import React, { useState } from "react"
import { useAuth } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Register.css"

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
      <h1>Registration Form</h1>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="username-input">
            <label htmlFor="username">Username:</label>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              id="register-user-input"
              onChange={event => setUsername(event.target.value)}
            />
          </div>
          <br />
          <br />
          <div className="password-input">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              id="register-password-input"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <br />
          <br />
          <button type="submit" className="submit-button-register">
            Register
          </button>
          <Link to="/login">
            <button className="login-button-register">Login</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
