const express = require('express')
const uuid4 = require('uuid').v4
const editModel = require('../db/model/editModel')
const layoutModel = require('../db/model/layoutModel')
const editRouter = express.Router()


editModel.updateOne({
    _id: "1bb8d5f4-dd24-4a53-aa2b-9e17132f043a",
}, {
    dashBoard:[
        [
          { id: 1, name: 100001, config: [Object] },
          { id: 0, name: 100000, config: [Object] },
          { id: 1, name: 100001, config: [Object] }
        ],
        [ { id: 2, name: 100002 }, { id: 0, name: 100000 } ],
        [ { id: 1, name: 100001 } ],
        []
      ]
}).then(data => {
}).catch(error => {
})


// 获取组件列表
editRouter.post('/getList', (req, res) => {
    editModel.find().then(data => {
        res.send(data)
    }).catch(error => {
        res.status(500).send(error)
    })
})
// 创建组件
editRouter.post('/create', (req, res) => {
    const { title } = req.body
    editModel.create({
        _id: uuid4(),
        title: title,
        flag: false,
        dashBoard:[]
    }).then(data => {
        res.send(data)
    }).catch(error => {
        res.status(500).send(error)
    })
})
// 更新组件
editRouter.post('/save', (req, res) => {
    const { pid, dashBoard } = req.body
    editModel.updateOne({
        _id: pid
    }, {
        dashBoard: JSON.parse(dashBoard)
    }).then(data => {
        console.log(data)
        res.send('ok')
    }).catch(error => {
        console.error(error)
        res.status(500).send(error)
    })
})
// 查找一个页面的数据
editRouter.post('/findOne', (req, res) => {
    const { id } = req.body
    editModel.findById(id).then(data => {
        console.log(data)
        res.send(data)
    }).catch(error => {
        console.error(error)
        res.status(500).send(error)
    })
})
editRouter.get('/', (req, res) => {
    // const edit = new editModel({
    //     _id: uuid4(),
    //     flag: false,
    //     title: 'test',
    //     date: new Date()
    // })
    // // 用save添加
    // edit.save().then((data) => {
    //     console.log(data) 
    //     res.send(data)
    // }).catch(err => {
    //     res.status(401).send(err)
    // })
    // 用create添加
    // editModel.create({
    //     _id: uuid4(),
    //     flag: false,
    //     title: '111',
    //     date: new Date()
    // }).then(data => {
    //     console.log(data)
    // })
    editModel.find().then(data => {
        res.send(data)
    })
    // 查询文档 返回数组
    // editModel.find().then()
    // 查找单条数据 返回对象
    // editModel.findOne({ name: 'xxx' }).then()
    // 按id查找
    // editModel.findById('xxxxx').then()
    // 匹配大于 小于
    // editModel.find({age:{$gt:20,$lt:50}}).then()
    // 匹配包含
    // editModel.find({ hobbies: { $in: ['包含'] } }).then()
    // 选择要查询的字段 -表示非
    // editModel.find().select('name email -_id').then()
    // 排序
    // editModel.find().sort('age').then()
    // skip跳过多少条数据，limit限制查询数量
    //editModel.find().skip(2).limit(2).then()

    // 更新单个
    // editModel.updateOne({ '查询条件'}, { '要修改的值'}).then()
    // 更新多个 查询条件为{}更改所有
    // editModel.updateMany({ '查询条件'},{'要更改的值'}}).then()
    
    // 删除文档
    // editModel.findOneAndDelete({}).then()
    // 删除多个
    // editModel.deleteMany({})  

    // 数据导入
    // mongoimport -d 数据库名称 -c 集合名称 -file 要导入的数据文件
})

module.exports = editRouter