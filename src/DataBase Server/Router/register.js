const connection = require('../DataBase/index')
const express = require('express')
const register = express.Router()

register.post('/register', (req, res) => {
  // eslint-disable-next-line handle-callback-err
  console.log(req.body.form)
  connection.query('insert into user value("' + req.body.form.name + '","' + req.body.form.password + '","' + req.body.form.email + '")', function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send({
        status: 201
      })
    } else {
      res.send({
        status: 200
      })
    }
  })
})

module.exports = register