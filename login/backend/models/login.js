const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoginSchema = new Schema({
    username:String,
    password:String
})
const Login = mongoose.model('login',LoginSchema)
module.exports = Login