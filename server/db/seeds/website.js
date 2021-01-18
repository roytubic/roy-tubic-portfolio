
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('website').del()
    .then(function () {
      // Inserts seed entries
      return knex('website').insert([
        {id: 1, website: 'rowValue1', url:'', summary: '', imgurl:''},
        {id: 2, website: 'rowValue1', url:'', summary: '', imgurl:''},
        {id: 3, website: 'rowValue1', url:'', summary: '', imgurl:''},
      ]);
    });
};
