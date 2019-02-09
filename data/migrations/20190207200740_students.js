
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', students => {
        students.increments();
        students.string('first_name', 128).notNullable();
        students.string('last_name', 128).notNullable();
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');


};
