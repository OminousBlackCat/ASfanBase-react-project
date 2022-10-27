const connection = require('../../DataBase/index')
const express = require('express')
const img = express.Router()

img.post('/add',(req,res) => {
  console.log(req.body)
  connection.query('insert into img value("'+ req.body.form.img +'")',function (err, rows, fields) {
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
module.exports = img