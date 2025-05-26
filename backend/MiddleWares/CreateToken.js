const {sign} = require('jsonwebtoken')


const CreateToken=(user)=>
{
    const accessToken=sign({username:user.username,id:user._id},process.env.SECRETTOKEN,{expiresIn:"2h"})
    return accessToken
}

module.exports={CreateToken}