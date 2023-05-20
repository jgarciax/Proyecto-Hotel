'use strict'

const { Router } = require('express');
const { createService,
        readService,
        updateService,
        deleteService } = require('../controllers/servicios.controller');
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-service', validateJWT, createService);

api.get('/read-service', readService);

api.put('/update-service/:id', validateJWT, updateService);

api.delete('/delete-service/:id', validateJWT, deleteService);

module.exports = api;