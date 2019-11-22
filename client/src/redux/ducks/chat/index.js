// import { useSelector, useDispatch } from "react-redux"
import io from 'socket.io-client'



const  socket = io.connect('http://localhost:3000')

socket.emit('new message', "socket it message")

socket.on('new message', (message) => {
  console.log(message)
})