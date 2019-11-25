import React, { useState } from "react"
import { useAuth } from "../hooks"
import { Link } from "react-router-dom"

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
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type="submit" className="submit-button-register">
            register
          </button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
