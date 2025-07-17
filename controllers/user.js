
const User = require("../models/user")
const {v4 : uuidv4} = requir('uuid');
const {setUser} = requir("../server/auth")
async function handleUserSignup(req,res){
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });
    return res.render("Home");

} 

async function handleUserSingin(req,res){
    const {email , password} = req.body;
    const user = await User.findOne({email,password});
    if(!user)return res.render( 'login' , {error: "not authorise"});

  const sessionId = uuidv4()
   setUser(sessionId, user);
   res.cokie('uid', sessionId)
   return res.redirect("/");
}

module.exports = {
     handleUserSignup,
     handleUserSingin
}
