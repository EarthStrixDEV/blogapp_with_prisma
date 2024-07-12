require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 5000

const post = require('./routes/post')
const user = require('./routes/user')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: true,
}))

app.use('/post', post)
app.use('/user', user)

app.listen(PORT ,() => {
    console.log('Express Server is running at [http://localhost:5000]');
})