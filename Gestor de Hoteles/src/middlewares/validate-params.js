const {validationResult} = require('express-validator');

const validateParams = async(req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({
            ok: false,
            message: errors.mapped()
        });
    }
    next();
}

module.exports = {validateParams};