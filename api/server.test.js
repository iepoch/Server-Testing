const request = require('supertest');
const server = require('./server');


describe('Server Testing response', () => {

    //Validates we get a response from the server
    it('gets server response', async () => {
        const response = await request(server).get('/')
        expect(response.status).toBe(200);
    })

    // Validates we are reciving a json information from the server
    it('gets a response server is using json', async () => {
        const response = await request(server).get('/')
        expect(response.type).toMatch(/json/i);
    })

    // Validates that we are actual getting a reponse from the body from the request
    it('test if we get a response from the body', async () => {
        const response = await request(server).get('/')
        expect(response.body).toEqual({api: 'up'})
    })

})

// Database Enpoint testing
describe('Database testing repsonse', () => {


//Validates we are reponding with the right students  and get a 201 as a reponse.
    it('responds with 201 when body is correct', async () => {
        const response = await request(server).get('/students');
        expect(response.status).toBe(201);
        expect(response.body).toEqual([
            {
                id: 1,
                first_name: "Archie",
                last_name: "Andrews"
            },
            {
                id: 2,
                first_name: "Jughead",
                last_name: "Jones"
            },
            {
                id: 3,
                first_name: "Betty",
                last_name: "Cooper"
            },
            {
                id: 4,
                first_name: "Veronica",
                last_name: "Lodge"
            }

        ]);

    })






})