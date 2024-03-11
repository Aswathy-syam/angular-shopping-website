const users = require('../models/userSchema')

const Jwt=require('jsonwebtoken')

const jwtSecret=process.env.JWTSECRET

//register


exports.Register = async (req, res) => {
    
    const { username, email, password } = req.body
    
    try {

        const preUser = await users.findOne({ email })
        
        if (preUser) {
            res.status(406).json("user is alreay exists please login!!!")
        } else {
            const newUser =  new users({
              username,
              email,
              password,
            });

            await newUser.save()

            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(401).json(error)
        
    }
    
}

// login

exports.loginContrller=async(req,res)=>{
    const {email,password}=req.body

try{
    const existingUser=await users.findOne({email,password})
    
    if(existingUser){

const token=Jwt.sign({userId:existingUser._id},jwtSecret)
res.status(200).json({existingUser,token})
    }
else{

}


}
catch(err){
res.status(402).json(err)
}

}