const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const generateJWT = async(uId, username, email) =>{
    const payload = {uId, username, email};
    try{
        const token = await jwt.sign(payload, secret, {
            expiresIn: '5h'
        });
        return token;
    }catch(error){
        throw new Error(Error + 'No se genero el Token');
    }
}

module.exports = { generateJWT };