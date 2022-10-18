const express = require('express')

const router = express.Router()
//注册
const register = require('./register')
router.use('/register', register)

module.exports = router