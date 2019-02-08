
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {first_name: 'Archie', last_name: 'Andrews'},
        {first_name: 'Jughead', last_name: 'Jones'},
        {first_name: 'Betty', last_name: 'Cooper'},
        {first_name: 'Veronica', last_name: 'Lodge'},
      ]);
    });
};
