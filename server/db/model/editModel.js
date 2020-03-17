const mongoose = require('mongoose')

let editSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    flag: { type: Boolean, required: true},
    title: { type: String },
    date: { type: Date, default: Date.now() },
    dashBoard:[]
})

let Edit = mongoose.model('edit', editSchema)

module.exports = Edit