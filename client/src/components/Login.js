import React, { useState } from "react"
import { useAuth } from "../hooks"
import "../styles/Login.css"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"

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
    <div className="login-container">
      <Icon icon="user" />
      <div className="login-form">
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
          <div className="buttons">
            <button type="submit" className="submit-button">
              Login
            </button>
            <Link to="/register">
              <button className="submit-button" id="register">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
