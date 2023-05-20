const {request, response} = require("express")
const jwt = require("jsonwebtoken");
const moment = require("moment");
const Usuario = require('../models/user.model');

const validateJWT = async(req = request, res = response, next) =>{
    const token = req.header("x-token");

    if(!token){
        return res.status(401).send({
            message: "No hay token en la petición",
        });
    };

    try{
        const payload = jwt.decode(token, process.env.SECRET_KEY);
        const userEncontrado = await Usuario.findById(payload.uId);
        console.log(userEncontrado);

        if(payload.exp <= moment().unix()){
            return res.status(500).send({message: 'El token ha expirado'});
        };

        if(!userEncontrado){
            return res.status(401).send({
                message: "Token no valido - usuario no existe en la Base de Datos"
            });
        };

        req.user = userEncontrado;
        next();
    }catch(error){
        throw new Error(error)
    }
};

module.exports = {validateJWT};