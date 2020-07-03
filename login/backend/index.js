const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost/antdlogin',{ useUnifiedTopology: true, 
useNewUrlParser: true },() => console.log('Connected to mongodb'))

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/api',require('./routes/api'))

app.listen(5000, () => console.log('Listening on port 5000'))