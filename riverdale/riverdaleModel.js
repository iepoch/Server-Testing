const db = require('../dbConfig')

module.exports = {

    get: () => {
        return db('students')
    },

    insert: (student) => {
    null
    },

    getStudentById: (id) => {
        null
    }

}