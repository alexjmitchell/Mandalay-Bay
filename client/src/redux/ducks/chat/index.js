import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import io from "socket.io-client"

const socket = io.connect("http://localhost:8080", {
  transports: ["websocket"]
})

const ADD_MESSAGE = "chat/ADD_MESSAGE"

const initialState = {
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] }
    default:
      return state
  }
}

const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message
  }
}

export const useChat = () => {
  const dispatch = useDispatch()
  const messages = useSelector(appState => appState.chatState.messages)
  const added = message => socket.emit("message", message)

  useEffect(() => {
    socket.on("message", message => {
      dispatch(addMessage(message))
    })
  }, [dispatch])

  return { messages, added }
}
