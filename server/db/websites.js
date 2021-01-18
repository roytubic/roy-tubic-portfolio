const connection = require('./connection')

function getWebsites (db = connection) {
  return db('website').select()
}

module.exports = {
  getWebsites
}