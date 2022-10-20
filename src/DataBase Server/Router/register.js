const connection = require('../DataBase/index').default
const express = require('express')
const register = express.Router()

register.post('/register', (req, res) => {
  // eslint-disable-next-line handle-callback-err
  console.log(req.body.form)
  connection.query('insert into admin value("' + req.body.form.name + '","' + req.body.form.password + '","' + req.body.form.email + '")', function (err, rows, fields) {
    if (err) {
      throw err
    }
    res.send({
      status: 20
    })
  })
})

module.exports = register