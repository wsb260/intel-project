const mongoose = require('mongoose')
const editModel = require('./editModel')
let layoutSchema = new mongoose.Schema({
    _id: { type:String, required:true },
    parentId: {
        type: String,
        required: true
    },
    dashBoard: { type:Array }
})

let Layout = mongoose.model('layout',layoutSchema)
module.exports = Layout