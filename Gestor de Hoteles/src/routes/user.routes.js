'use strict'

const { Router } = require('express');
const { createUser, 
        readUser,
        updateUser, 
        deleteUser, 
        loginUser} = require('../controllers/user.controller')
const {check} = require('express-validator');
const {validateParams} = require ('../middlewares/validate-params');
const {validateJWT} = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-user', [
                check('name', 'El name es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').not().isEmpty(),
                check('password', 'El password debe ser igual o mayor a 6 digitos').isLength({min: 6}),
                validateParams], createUser);

api.get('/read-user', validateJWT, readUser); 

api.put('/update-user/:id', [validateJWT,
                check('name', 'El name es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').not().isEmpty(),
                validateParams], updateUser);

api.delete('/delete-user/:id', validateJWT,deleteUser);

api.post('/login', loginUser);

module.exports = api;