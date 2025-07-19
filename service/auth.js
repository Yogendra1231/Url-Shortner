// const sessionIdToUserMap = new Map();

// function setUser(id , user){
//     return sessionIdToUserMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

const jwt = require("jsonwebtoken");

const secret = "yogendra$12$"


function setUser(user){
     return jwt.sign({_id: user._id,
         email: user.email,},secret);
         }

function getUser(token){
    if(!token)return null

    try{
        return jwt.verify(token, secret);

    }
    catch(error){
        return null;
    }
    
}



module.exports = {
    setUser,
    getUser
}