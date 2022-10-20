const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '101.35.3.92',
  user: 'react',
  password: '123698745',
  database: 'react-mysql',
  port: 10006, // 端口号
  multipleStatements: true,
  useConnectionPooling: true
})

module.exports = connection
