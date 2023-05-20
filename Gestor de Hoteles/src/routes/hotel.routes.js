'use strict'

const { Router } = require('express');
const { createHotel,
        readHotel,
        updateHotel,
        deleteHotel } = require('../controllers/hotel.controller');
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-hotel', validateJWT,createHotel);

api.get('/read-hotel', readHotel);

api.put('/update-hotel/:id', validateJWT,updateHotel);

api.delete('/delete-hotel/:id', validateJWT,deleteHotel);

module.exports = api;