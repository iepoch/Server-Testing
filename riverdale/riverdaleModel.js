const db = require('../dbConfig')

module.exports = {

    get: () => {
        return db('students')
    },

    insert: (student) => {
    return db('students').insert(student)
    },

    getStudentById: (id) => {
        null
    }

}