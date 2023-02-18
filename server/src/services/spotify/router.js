const express = require('express')
const router = express.Router()

const ctrlr = require('./controller')

router.get('/login', ctrlr.authSpotify)
router.get('/callback', ctrlr.callback)

module.exports = router 