const connection = require('../../DataBase/index')
const express = require('express')
const register = express.Router()

register.post('/register', (req, res) => {
  // eslint-disable-next-line handle-callback-err
  connection.query('select * from user where name = "'+req.body.form.name+'"', function (err, rows, fields) {
    if (err) {
      throw err
    }
    console.log(rows)
    if (rows.length == 0) {
      connection.query('insert into user value("' + req.body.form.name + '","' + req.body.form.password + '","' + req.body.form.email + '")', function (err, rows, fields) {
        if (err) {
          res.send({
            status: 201
          })
        } else {
          res.send({
            status: 200
          })
        }
      })
    } else {
      res.send({
        status: 304
      })
    }
  })
})

module.exports = register