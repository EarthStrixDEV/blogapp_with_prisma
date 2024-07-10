require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

const post = require('./routes/post')
const user = require('./routes/user')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: true,
}))

app.use('/post', post)
app.use('/user', user)

app.listen(PORT ,() => {
    console.log('Server is running at [http://localhost:5000]');
})