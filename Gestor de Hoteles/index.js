'use strict'

const express = require("express")
const app = express();
const { connection } = require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;
const user = require('./src/routes/user.routes');
const hotel = require('./src/routes/hotel.routes');
const servicios = require('./src/routes/servicios.routes');
const bedroom = require('./src/routes/bedrooms.routes');
const event = require('./src/routes/events.routes');
const reservation = require('./src/routes/reservation.routes');
const cors = require("cors");
const { AdminApp } = require("./src/controllers/user.controller");

AdminApp();
connection();

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors());
app.use('/api', user,
                hotel,
                servicios,
                bedroom,
                event,
                reservation);

app.listen(port, () =>{
    console.log(`The server is connected to the port ${port}`);
});