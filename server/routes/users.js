const router = require("express").Router()
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const db = require("../db")
const config = require("config")
const jwt = require("jsonwebtoken")

router.post("/register", (request, response, next) => {
  const salt = uuid()
  const username = request.body.username
  const password = sha512(request.body.password + salt)
  const sql = `INSERT INTO users (username, password, salt) VALUES(?, ?, ?)`

  db.query(sql, [username, password, salt], (error, results, fields) => {
    if (error) {
      throw new Error(error)
    }

    response.json({
      message: "User was created.",
      results
    })
  })
})

router.post("/login", (request, response, next) => {
  const username = request.body.username
  let password = request.body.password

  const getSalt = `
  SELECT salt FROM users WHERE username = ?
  `

  db.query(getSalt, [username], (error, results, fields) => {
    if (results.length > 0) {
      password = sha512(password + results[0].salt)

      const sql = `
      SELECT count(1) as count FROM users WHERE username = ? AND password = ?
      `

      db.query(sql, [username, password], (error, results, fields) => {
        if (results[0].count > 0) {
          const token = jwt.sign({ username }, config.get("secret"))

          response.json({
            message: "Authenticated",
            token
          })
        } else {
          response.status(401).json({
            message: "Username or Password are incorrect"
          })
        }
      })
    } else {
      response.status(401).json({
        message: "User doesn't exist"
      })
    }
  })
})

module.exports = router
