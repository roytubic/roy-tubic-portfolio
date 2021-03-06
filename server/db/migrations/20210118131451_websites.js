
exports.up = function(knex) {
    return knex.schema.createTable('website', table => {
        table.increments('id')
        table.string('website')
        table.string('url')
        table.string('summary')
        table.string('imgurl')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('website')
};
