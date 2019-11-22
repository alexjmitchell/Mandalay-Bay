import React, { useState } from "react"
import { useAuth, useChat } from "../hooks"
import "../redux/ducks/chat"

const Dashboard = props => {
  const { username, signout } = useAuth()
  const [message, setMessage] = useState("")
  const { messages, added } = useChat()

  const handleSubmit = event => {
    event.preventDefault()
    added(message)
    setMessage("")
  }

  return (
    <div>
      <h1>Hello {username}!</h1>
      <button onClick={event => signout()}>Sign Out</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={event => setMessage(event.target.value)}
          name="message"
        />
        <button type="submit">Submit</button>
      </form>
      {messages.map((mess, i) => (
        <p key={`message-${i}`}>{mess}</p>
      ))}
    </div>
  )
}

export default Dashboard
