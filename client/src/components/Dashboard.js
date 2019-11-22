import React from "react"
import { useAuth } from "../hooks"
import { Link } from "react-router-dom"

const Dashboard = props => {
  const { username, signout } = useAuth()
  return (
    <div>
      <h1>Hello {username}!</h1>
      <Link to="/aboutme">About Me</Link>
      <button onClick={event => signout()}>Sign Out</button>
    </div>
  )
}

export default Dashboard
