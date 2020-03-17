const express = require('express')
const bodyParser = require('body-parser')
// 处理路径
const path = require('path')
// 链接数据库
const db = require('./db/connect')
// 创建服务器
const app = express()
// 开放静态资源文件
app.use('/admin',express.static(path.join(__dirname, 'public')))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 引入路由模块
const home = require('./route/home')
const admin = require('./route/admin')
const edit = require('./route/edit')
// 为路由匹配请求路径
app.use('/home', home)
app.use('/admin',admin)
app.use('/edit',edit)
app.listen(3000, () => {
    console.log('服务器启动成功')
})

