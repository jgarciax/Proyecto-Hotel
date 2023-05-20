'use strict'

const { Router } = require("express");
const { createEvents } = require("../controllers/events.controller");
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-event', validateJWT, createEvents);

module.exports = api;