'use strict'

const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
  res.send('SUCCSESS')
})

module.exports = router
