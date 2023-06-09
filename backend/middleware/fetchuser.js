const { request } = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy'

const fetchuser = (req, res, next) => {
    //Ger the user from jwt token and add id to req object 
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please Authenticate usin a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        request.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate usin a valid token" })
    }

}


module.exports = fetchuser;