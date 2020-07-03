const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    name:String,
    age:Number,
    email:String,
    username:String,
    password:String,
    confirmPassword:String,
    phone:String
})
const Register = mongoose.model('register',RegisterSchema)
module.exports = Register