import React, { useState } from "react"
import { useAuth, useChat } from "../hooks"
import "../redux/ducks/chat"
import "../styles/Dashboard.css"

const Dashboard = props => {
  const { username, signout } = useAuth()
  const [message, setMessage] = useState("")
  const { messages, added, users } = useChat()

  const handleSubmit = event => {
    event.preventDefault()
    added({ message, username })
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
      <div id="chat">
        <div id="users">
          {users.map((user, i) => (
            <p key={`user-${i}`}>{user.username}</p>
          ))}
        </div>
        <div id="messages"></div>
        {messages.map((mess, i) => (
          <p key={`message-${i}`}>{mess.message}</p>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
