const express = require('express')
const app = express()
require('./config/env-vars-init')

app.use('/', require('./routes/root'))

app.listen(process.env.PORT, process.env.HOST, (req, res) => {
    console.log('server initialized successfully')
})