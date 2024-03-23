const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

//routes
readdirSync ('./routes').map((r) => app.use('/api/', require(`./routes/${r}`)))



const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`You are listening to port ${PORT}`);
    })
}

server()