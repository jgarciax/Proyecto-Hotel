'use strict'

const { Router } = require('express');
const { createBedroom,
        readBedroom,
        updateBedroom,
        deleteBedroom } = require('../controllers/bedrooms.controller');
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-bedroom', validateJWT, createBedroom);

api.get('/read-bedroom', readBedroom);

api.put('/update-bedroom/:id', validateJWT, updateBedroom);

api.delete('/delete-bedroom/:id', validateJWT, deleteBedroom);

module.exports = api;