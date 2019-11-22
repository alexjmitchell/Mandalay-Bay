module.exports = io => {
  io.on("connection", socket => {
    console.log("Connection received: ", socket.id)

    socket.on("send message", message => {
      io.emit("send message", message)
    })
  })
}
