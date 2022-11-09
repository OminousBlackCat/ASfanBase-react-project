const connection = require('../../DataBase/index')
const express = require('express')
const msg = express.Router()

msg.post('/add',(req,res) => {
  console.log(req.body)
  connection.query('insert into msg value("'+ req.body.form.title +'")',function (err, rows, fields) {
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
})
module.exports = msg