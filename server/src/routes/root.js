const express = require('express')
const router = express.Router()

router.use('/spotify', require('../services/spotify/router'));

module.exports = router