'use strict'

const { Router } = require("express")
const { validateJWT } = require('../middlewares/validate-jwt');
const { Bookings, CreateReservation, CancelReservation, ReservationId } = require("../controllers/reservation.controller");

const api = Router();

api.get('/read-bookings', validateJWT, Bookings);

api.post('/create-reservation', CreateReservation);

api.post('/cancel-reservation/:id', CancelReservation);

api.get('/reservation-id/:id', validateJWT, ReservationId);

module.exports = api;