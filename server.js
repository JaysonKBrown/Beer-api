const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

// security
const cors = require('cors')
server.use(cors())
server.use(express.json())

const helmet = require('helmet')
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"]
    }
}))

const router = require('./app/routes/router')
server.use('/', router)
server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`${PORT} bottles of beer on the wall, ${PORT} bottles of beer... if you take one down and pass it around, ${PORT - 1} bottles of beer on the wall`))