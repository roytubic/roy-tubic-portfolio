const express = require('express')
const router = express.Router()

const db = require('../db/websites')

router.get('/', (req, res) => {
  const id = req.website.id
  db.getWebsites(id)
    .then(results => {
      res.json({ websites: results.map(website => website.body)})
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router