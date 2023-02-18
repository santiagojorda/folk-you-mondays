const express = require('express')
const router = express.Router()

const ctrlr = require('./controller')

router.get('/login', ctrlr.userAuth)
router.get('/callback', ctrlr.requestTokens)
router.get('/getCover', ctrlr.getListSongs)

module.exports = router 