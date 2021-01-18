const express = require('express')

const db = require('../db/websites')

const router = express.Router()

router.get('/', (req, res) => {
  db.getWebsites()
    .then(results => {
      res.json({ websites: results.map(website => website.??? })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router