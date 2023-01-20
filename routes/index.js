const { Router } = require('express')

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.status(200).json({ msg: 'hello, friend' })
})

module.exports = router
