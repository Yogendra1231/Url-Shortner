const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const urlRouter = require('./routes/url')
const URL = require('./models/url')
const PORT = 8001;
const {restrictToLoggedinUserOnly,checkAuth } = require("./middleware/auth")
const staticRoute = require('./routes/staticRoute')
const userRout = require('./routes/user');
const cookieParser = require('cookie-parser');
mongoose.connect('mongodb://127.0.0.1:27017/url-shortner').then(()=>console.log("mongoose connected")).catch((err)=>console.log("err came to connect with mongoose"));

app.set("view engine", 'ejs')
app.set("views", path.resolve('./views'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/url',restrictToLoggedinUserOnly, urlRouter);
app.use('/', checkAuth, staticRoute);
app.use('/user', userRout);

app.listen(PORT, ()=> console.log("server is started"));


 