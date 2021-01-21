const { applyAuthRoutes } = require('authenticare/server')

const express = require('express')
const router = express.Router()

const {
  getWebsites
} = require('../db/websites')

applyAuthRoutes(router, {
  getWebsites
})

module.exports = router
