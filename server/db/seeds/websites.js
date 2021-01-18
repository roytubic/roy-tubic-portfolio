
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('websites').del()
    .then(function () {
      // Inserts seed entries
      return knex('websites').insert([
        {id: 1, website: 'rowValue1', url:'', summary: '', imgurl:''},
        {id: 2, website: 'rowValue1', url:'', summary: '', imgurl:''},
        {id: 3, website: 'rowValue1', url:'', summary: '', imgurl:''},
      ]);
    });
};
