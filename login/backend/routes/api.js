const express = require('express')
const router = express.Router()
const Login = require('../models/login')
const Register = require('../models/register')

router.post('/registers',(req,res) => {
    Register.create(req.body).then(data => res.send(data))
})
router.get('/registers',(req,res) => {
    Register.find({}).then(data => res.send(data))
})
module.exports = router