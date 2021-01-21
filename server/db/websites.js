const connection = require('./connection')

function getWebsites (website, db = connection) {
  return db('website')
  .select()
  .where( { website } )
  .first()
}



module.exports = {
  getWebsites
}