exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('websites').del()
    .then(function () {
      // Inserts seed entries
      return knex('websites').insert([
        {id: 1, website: 'Devurban dictionary', url:'https://devurban-dictionary.herokuapp.com/', summary: 'A project that some of my classmates and myself worked on. This week we focussed on learning about databases and how to route information from them. We decided to keep it pretty simple, creating an urban dictionary type of site', imgurl:''},
        {id: 2, website: 'rowValue1', url:'', summary: '', imgurl:''},
        {id: 3, website: 'rowValue1', url:'', summary: '', imgurl:''},
      ]);
    });
};
