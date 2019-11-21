const router = require("express").Router()

router.get("/goo", (request, response, next) => {
  response.json({
    message: "be gone"
  })
})

module.exports = router
