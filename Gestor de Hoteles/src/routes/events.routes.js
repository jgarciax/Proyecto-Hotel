'use strict'

const { Router } = require("express");
const { createEvents, readEvent } = require("../controllers/events.controller");
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-event',  createEvents);

api.get('/read-event', readEvent);

module.exports = api;