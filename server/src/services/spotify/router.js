const express = require('express')
const router = express.Router()

const ctrlr = require('./controller')

router.get('/login', ctrlr.userAuth)
router.get('/callback', ctrlr.requestTokens)

module.exports = router 