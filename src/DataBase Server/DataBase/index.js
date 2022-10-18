var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'react-mysql',
  port: 3306, // 端口号
  multipleStatements: true
})

module.exports = connection
