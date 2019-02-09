const express = require('express');

const server = express();

const students = require('../riverdale/riverdaleModel')

server.use(express.json());



server.get('/', async (req, res) => {
    res.status(200).json({api: 'up'})
})

server.get('/students', async (req, res) => {

    const rows = await students.get();
    res.status(201).json(rows);
})

module.exports = server;