const express = require('express');

const userRout = express.Router();
const {handleUserSignup, handleUserSingin}= require('../controllers/user')
userRout.post('/', handleUserSignup);
userRout.post('/login', handleUserSingin);
module.exports = userRout;