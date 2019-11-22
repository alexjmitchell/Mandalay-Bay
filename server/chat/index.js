module.exports = io => {
 try {
  io.on("connection", socket => {
    console.log("Connection received: ", socket.id)

    socket.on("send message", message => {
      io.emit("send message", message)
    })
  })
 } catch {
   console.log("error message", error)
 }
}
