const connection = require('../../DataBase/index')
const express = require('express')
const login = express.Router()

login.get('/login', (req, res) => {
  // eslint-disable-next-line handle-callback-err
  connection.query('select * from user where name = "' + req.query.form.name + '"', function (err, rows, fields) {
    console.log(rows)
    console.log(req.query.form)
    if (err) {
      throw err
    }
    if (!rows) {
      res.send({
        status: 201
      })
    }
  })
})

module.exports = login