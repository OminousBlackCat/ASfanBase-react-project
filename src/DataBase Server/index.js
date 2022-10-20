const express = require('express')
// 数据库连接模块
// eslint-disable-next-line no-unused-vars
const connection = require('./DataBase/index').default
const router = require('./Router/index')
const app = express()

app.use(require('cors')())
app.use(express.json())
// 全部路由模块化封装
app.use('/', router)

app.listen(8000, () => {
  console.log('ok')
})
