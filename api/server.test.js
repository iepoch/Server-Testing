const request = require('supertest');
const server = require('./server');



describe('The route handlers exist', () => {

    it('gets a repsponse', async () => {
        const response = await request(server).get('/')
        expect(response.status).toBe(200);
})



})