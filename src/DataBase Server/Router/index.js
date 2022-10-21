const express = require('express')

const router = express.Router()
//注册
const register = require('./user/register')
router.use('/register', register)
const login = require('./user/login')
router.use('/login', login)


module.exports = router