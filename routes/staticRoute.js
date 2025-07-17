const express = require("express")
const staticRouter = express.Router();
const Url = require('../models/url')

   staticRouter.get('/', async (req, res)=>{
      if(!req.user) return res.redirect("/login");
     const allurl = await Url.find({createdBy: req.useer._id});

     res.render('Home', {url: allurl});
   })
 
   staticRouter.get('/signup',(req,res)=>{
      return res.render("signup")
   })

   staticRouter.get('/login', (req,res)=>{
      res.render("login");
   })

module.exports = staticRouter;