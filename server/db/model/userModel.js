const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true}
})

// 将schema对象转换为数据模型
let User = mongoose.model('users', userSchema)

module.exports = User