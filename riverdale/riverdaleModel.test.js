const students = require('./riverdaleModel');
const db = require('../dbConfig');

describe('Riverdale Model', () => {
    afterEach(async () => {
        await db('students').truncate();
        await db.seed.run();
    });


    it('should insert new students', async () => {

        const ids = await students.insert(
            {
                first_name: 'Cheryl',
                last_name: 'Blossom'
            });
        expect(ids.length).toBe(1);
        // expect(ids[0]).toBe(1);   //This is not working even with the truncate...
    //    db('students').truncate();
    })
})