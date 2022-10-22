const connection = require('../../DataBase/index')
const express = require('express')
const login = express.Router()

login.get('/login', (req, res) => {
  // eslint-disable-next-line handle-callback-err
  connection.query('select * from user where name = "'+req.query.form.name+'"', function (err, rows, fields) {
    if (err) {
      throw err
    }
    if (rows.length == 0) {
      res.send({
        status: 304
      })
    } else {
      if (rows[0].password == req.query.form.password) {
        res.send({
          status: 200
        })
      } else {
        res.send({
          status: 201
        })
      }
    }
  })
})

module.exports = login