const connection = require('./connection')

function getWebsites (website, db = connection) {
  return db('websites')
  .select()
  .where( { website } )
  .first()
}



module.exports = {
  getWebsites
}