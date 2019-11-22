import React from "react"
import { useAuth } from "../hooks"

const AboutMe = props => {
  const { username } = useAuth()
  return (
    <div>
      <h1>My Name is {username}!</h1>
    </div>
  )
}

export default AboutMe
